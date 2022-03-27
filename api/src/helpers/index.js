/**
 * validates fields on an object returning true if all the fields are defined, otherwise false
 * @param {object} o the object to validate
 * @param  {...string|number} fields the fields to check 
 */
export const validChain = (o, ...fields) => fields.reduce((o, f) => (o || {})[f], o) ? true : false;

/**
 * validates fields on an object returning the value of the final field if it is defined, otherwise undefined
 * @param {object} o the object to validate
 * @param  {...string|number} fields the fields to access
 */
export const validGet = (o, ...fields) => fields.reduce((o, f) => (o || {})[f], o);