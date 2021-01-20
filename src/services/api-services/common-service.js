/*
 * A Common Service for:
 * 1. Hitting a common http request that gets intercepted 
 *    for common operations as loaders.
 * 2. Common Functions for "POST", "GET", "DELETE", "PATCH" and "PUT"
 */

import MainService from './main-service'

class CommonService extends MainService {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    postRequest(url, body) {
        return super.regularPostRequest(url, body);
    }
}

const httpClient = new CommonService()
export default httpClient;
