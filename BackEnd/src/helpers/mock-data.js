import fs from 'fs';
const FS = fs.promises || fs;

/**
 * 
 * @param {string} name Name of the MockData file to retrieve data from
 * @param {string[]} projection optional Array of fields to select from data
 * @returns {object[]} results from the file
 */
export const getMockData = async (name, projection) => {
  let results = JSON.parse(await FS.readFile(`./MockData/${name}.json`,'utf8'));
  if (projection) {
    results = results.map(result => projection.reduce((o, f) => ({...o, [f]: result[f]}), {}));
  }
  return results;
};

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