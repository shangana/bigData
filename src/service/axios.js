'use strict';

import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? process.env.API_ROOT : '';

axios.interceptors.request.use(config => {
  return config;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(res => {
  const apiRes = res.data;
  return apiRes;
}, async error => {
  console.dir(error);
  return Promise.reject(error);
});

export default axios;
