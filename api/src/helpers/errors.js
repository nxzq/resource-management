const DEFAULT_ERROR = {
  status: 500,
  message: 'Internal Server Error',
  responseType: 'send'
};
/**
 * 
 * @param {object} opts 
 *  opts.status set response status, default 500
 *  opts.message set response message, default "Internal Server Error"
 *  opts.responseType set the express method of response, default "send"
 *  opts.isOperational specify if error is operational, default false
 */
export const ERROR_RESPONSE = (opts = {}) => {
  const {status, message, isOperational, responseType} = {...DEFAULT_ERROR, ...opts};
  const error = new Error(message);
  error.statusCode = {
    status,
    message,
    responseType
  };
  error.isOperational = isOperational;

  return error;
};

/**
 * Error_Response with status default 404, and isOperational true
 * @param {string} message message to send with response
 */
export const NOT_FOUND_RESPONSE = (message) => ERROR_RESPONSE({status: 404, message, isOperational: true});

/**
 * Error_Response with status default 400, and isOperational true
 * @param {string} message message to send with response
 */
export const BAD_REQUEST_RESPONSE = (message) => ERROR_RESPONSE({status: 400, message, isOperational: true});