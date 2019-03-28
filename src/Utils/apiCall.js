import axios from 'axios';

class ApiCall {
  constructor() {
    let apiCall = axios.create({
      headers: {
        Accept: 'application.json, text/plain, */*'
      }
    });
    
    apiCall.interceptors.response.use(this.handleSuccess, this.handleError)
    this.apiCall = apiCall;
  }
  
  handleSuccess(response) {
    return response;
  }
  
  handleError = error => {
    let err;
    try {
      err = error.response.data;
    } catch(e) {
      err = error;
    }
    switch (error.response.status) {
      case 302:
      case 500:
      default:
        break;
    }
    return Promise.reject(err);
  };
  
  get(path, params = {}) {
    return this.apiCall.request({
      method: 'GET',
      url: path,
      responseType: 'json',
      params: params
    }).then(response => {
      return Promise.resolve(response.data, response.status)
    })
  }
  
  post(path, payload = {}) {
    return this.apiCall.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    }).then(response => {
      return Promise.resolve(response.data, response.status)
    })
  }
  
  put(path, payload = {}) {
    return this.apiCall.request({
      method: 'PUT',
      url: path,
      responseType: 'json',
      data: payload
    }).then(response => {
      return Promise.resolve(response.data, response.status)
    })
  }
}

export default new ApiCall();
