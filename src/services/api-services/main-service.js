/***********************/
/* MAIN API SERVICE ****/
/***********************/

import axios from "axios";
import LoaderService from "../loader-service/loader-service"
import { toast } from 'react-toastify';
import { BASE_URL } from "./api-urls";

export default class MainService {
  //INTERCEPT REQUEST
  requestInterceptor = (config) => {
    console.log(config)
    //Start the loader
    LoaderService.start();
    return config;
  };

  //INTERCEPT RESPONSE
  responseInterceptor = (config) => {
    console.log(config)
    if(!config || !config.data)
    return config;

    let result = config.data;

    //Stop the loader
    LoaderService.complete();

    //Show Toast
    if(result && result.success) {
      toast.success(result.message);
    } else if(result && !result.success) {
      toast.error(result.message);
    }

    return result;
  };

  //HANDLE HTTP REQUEST ERROR
  handleError = (err) => {
    //Stop the loader and show the error
    LoaderService.complete();
    toast.error(err.message);

    Promise.reject(err);
  };

  constructor() {
    /* MAIN HTTP REQUEST CLIENT */
    this.HTTP_CLIENT = axios.create({
      baseURL: BASE_URL,
      headers: { "Content-Type": "application/json",
                 "Access-Control-Allow-Origin" : "*"  }
    });

    //Attach Interceptors
    this.HTTP_CLIENT.interceptors.request.use(
      this.requestInterceptor, this.handleError);
    this.HTTP_CLIENT.interceptors.response.use(
      this.responseInterceptor, this.handleError);
  }

  regularPostRequest(url, body) {
    return this.HTTP_CLIENT.post(url, body);
  }
}
