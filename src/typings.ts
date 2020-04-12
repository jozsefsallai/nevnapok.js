/**
 * Client options
 * @typedef {object} ClientOpts
 * @property {string} [apiUrl] - The apiUrl to which the requests will be sent
 */
export interface ClientOpts {
  apiUrl?: string;
}


/**
 * Generic API response
 * @typedef {object} GenericAPIResponse
 */
export interface GenericAPIResponse {
  [key: string]: string[] | null | undefined;
}
