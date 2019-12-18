import * as MockDataService from '../helpers/mock-data';
import { ERROR_RESPONSE, NOT_FOUND_RESPONSE } from '../helpers/errors';

const DATA_NAME = 'Resources';
const notFound = NOT_FOUND_RESPONSE('The resource with the given ID was not found');
const notFoundHead = ERROR_RESPONSE({...notFound.statusCode, isOperational: true, responseType: 'end'});

/**
 * read resources from mock data
 * @param {string[]?} projection specify wanted fields on rows
 */
export const readResources = async (projection) => await MockDataService.getMockData(DATA_NAME, projection);

/**
 * read resource from mock data by id
 * @param {string|number} Id the id of the resource
 * @param {string[]?} projection specify wanted fields on row
 */
export const readResourceById = async (Id, projection) => {
  const resources = await MockDataService.getMockData(DATA_NAME, projection);
  const resource = resources.find(d => d.Id === Number(Id));
  if (!resource) return [notFound];
  return [null, resource];
};

/**
 * save resources to mock data
 * @param {object[]} resources the resources to save
 */
export const saveResources = async (resources) => await MockDataService.saveMockData(DATA_NAME, resources);

/**
 * add resource to mock data
 * @param {object} resource the resource to add
 */
export const createResource = async (resource) => {
  const resources = await readResources();
  resource.Id = (Math.max.apply(Math, resources.map(function(o) { return o.Id; }))) + 1;
  resources.push(resource);
  saveResources(resources);
  return [null, resource];
};

/**
 * update resource in mock data
 * @param {string|number} Id the id of the resource to update
 * @param {object} resource the updated resource
 */
export const updateResource = async (Id, resource) => {
  const resources = await readResources();
  let currentResource = resources.find(r => r.Id === Number(Id));
  if (!currentResource) return [notFound];
  const index = resources.findIndex(x => x.Id == resource.Id);
  resources[index] = resource;
  saveResources(resources);
  return [null, resource];
};

/**
 * delete resource from mock data
 * @param {string|number} Id the id of the resource to delete
 */
export const deleteResource = async (Id) => {
  const resources = await readResources();
  let resource = resources.find(r => r.Id === Number(Id));
  if (!resource) return [notFound];
  let index = resources.findIndex(x => x.Id === resource.Id);
  resources.splice(index, 1);
  saveResources(resources);
  return [null, resource];
};

/**
 * verifies if a resume file exists for the given id
 * @param {string|number} Id resource id that the resume belongs to
 * @param {boolean?} isHead specifies if this is for a HEAD request
 */
export const verifyResumeExists = async (Id, isHead) => {
  const exists = MockDataService.fileExists(`Resumes/${Id}.pdf`);
  if (!exists) return [isHead ? notFoundHead : notFound];
  return [null, exists];
};