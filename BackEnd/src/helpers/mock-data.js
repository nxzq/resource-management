import fs from 'fs';
const FS = fs.promises || fs;

/**
 * 
 * @param {string} name Name of the MockData file to retrieve data from
 * @param {string[]} projection optional Array of fields to select from data
 * @returns {object[]} results from the file
 */
export const getMockData = (() => {
  const DEFAULT_OPTIONS = { skip: 0, top: 10, page: false };
  return async (name, opts={}) => {
    let { page, projection, selection, skip, sort, top } = {...DEFAULT_OPTIONS, ...opts};
    let results = JSON.parse(await FS.readFile(`./MockData/${name}.json`,'utf8'));
    if (selection) results = results.filter(selection);
    if (sort) results.sort(sort);
    if (projection) results = results.map(result => projection.reduce((o, f) => ({...o, [f]: result[f]}), {}));
    const count = results.length;
    if (!page) return results;
    skip = Number(skip) || DEFAULT_OPTIONS.skip;
    top = Number(top) || DEFAULT_OPTIONS.top;
    if ((top || top === 0) && (skip || skip === 0)) results = results.slice(skip, top+skip);
    page = { skip, top, count };
    return { results, page };
  };
})();

/**
 * 
 * @param {string} path Path to check if exists
 * @returns {string|false} returns path if it exists otherwise returns false 
 */
export const fileExists = (path) => {
  path = `./MockData/${path}`;
  const exists = fs.existsSync(path);
  return exists ? path : false;
};

/**
 * 
 * @param {string} name Name of the MockData file to retrieve data from
 * @param {any} data data to write to file
 */
export const saveMockData = async (name, data) => await FS.writeFile(`./MockData/${name}.json`, JSON.stringify(data));