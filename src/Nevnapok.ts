import { ClientOpts, GenericAPIResponse } from './typings';

import es6promise from 'es6-promise';
es6promise.polyfill();

import 'isomorphic-fetch';

/**
* @api public
*/
class Client {
  /**
  * API wrapper for api.nevnapok.eu
  *
  * @param {ClientOpts} opts
  */

  public readonly apiUrl: string;

  constructor(opts: ClientOpts = {}) {
    this.apiUrl = opts.apiUrl || 'https://api.nevnapok.eu';
  }

  /**
   * _get - Internal function to process GET requests
   * @param {string} endpoint - The endpoint to attach to the API URL
   */
  private _get(endpoint: string): Promise<string[] | null> {
    return new Promise((resolve, reject) => {
      return fetch(`${this.apiUrl}/${endpoint}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((res: Response) => res.json())
      .then((json: GenericAPIResponse) => {
        const keys: string[] = Object.keys(json);
        return keys.length
        ? resolve(json[keys[0]])
        : resolve(null);
      })
      .catch(reject);
    });
  }

  /**
   * today - Getting namedays on the current day
   */
  today(): Promise<string[] | null> {
    return this._get('ma');
  }

  /**
   * on - Getting namedays on a specific date
   * @param {number} month - The number of the month (1-12)
   * @param {number} day - The number of the day (1-31)
   */
  on(month: number, day: number) : Promise<string[] | null> {
    if (month < 1 || month > 12) {
      throw new Error('nevnapok.js: Invalid month provided to the on() function.');
    }

    if (day < 0 || day > 31) {
      throw new Error('nevnapok.js: Invalid day provided to the on() function.');
    }

    const monthDayString: string = (month < 10 ? `0${month}` : month)
      + '-'
      + (day < 10 ? `0${day}` : day);

    return this._get(`nap/${monthDayString}`);
  }

  /**
   * of - Getting namedays of a specific name
   * @param {string} name - The name to search for
   */
  of(name: string): Promise<string[] | null> {
    name = encodeURIComponent(name);
    return this._get(`nev/${name}`);
  }
}

export {
  Client
};
