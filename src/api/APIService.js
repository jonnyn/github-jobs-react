import axios from 'axios';
import Config from 'api/Config';

export default class APIService {
  static parseTpl(template, map, fallback) {
    return template.replace(/#\{.+?}/g, (match) => {
      const path = match.substr(2, match.length - 3).trim();
      return this.getTpl(path, map, fallback);
    });
  }
  
  static getTpl(path, obj, fb = `$\{${path}}`) {
    return path.split('.').reduce((res, key) => res[key] || fb, obj);
  }

  /**
   * Function to perform get requests to the API
   *
   * @static
   * @param {String} url
   * @param {String} queryParams
   * @returns {Promise}
   *
   * @memberof APIService
   */
  static get(baseUrl, url, queryParams) {
    return this.request({
      baseUrl,
      url,
      queryParams,
    });
  }

  /**
   * Public Function to perform all of the requests to the API
   *
   * @static
   * @param {Object} { url, method = 'get', data, queryParams, config }
   * @returns
   *
   * @memberof APIService
   */
  static request({ baseUrl, url, method = 'get', data, queryParams, config }) {
    const templatedUrl = this.parseTpl(url, { ...queryParams });
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.internalRequest({
          baseUrl,
          url: templatedUrl,
          method,
          data,
          queryParams,
          ...config
        });
        resolve(res);
      } catch (error) {
        reject(error.response);
      }
    });
  }

  /**
   * PRIVATE Function to perform an HTTP request with the given parameters,
   * every single Request should be executed through this function,
   * even if the request is to an third-party API
   *
   * @static
   * @param  {Object}
   * @returns {Promise}
   *
   * @memberof APIService
   */
  static async internalRequest(
    { 
      baseUrl, 
      url, 
      method, 
      data, 
      queryParams, 
      timeout = Config.setting.timeout, 
      withCredentials = false, 
      headers = { Accept: 'application/json' } 
    }
  ) {
    const qp = { ...queryParams };
    return axios({
      url: baseUrl + url,
      method,
      data,
      params: qp,
      timeout,
      withCredentials,
      headers
    });
  }
}
