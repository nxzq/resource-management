import * as MockDataService from '../helpers/mock-data';

const DATA_NAME = 'Skills';

/**
 * read skills from mock data
 * @param {string[]?} projection specify wanted fields on rows
 */
export const readSkills = async (projection) => await MockDataService.getMockData(DATA_NAME, projection);