import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const api: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 10000, // 10 seconds
 headers: {
    Accept: 'application/json',
    crossDomain: true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    'Content-Type': 'application/json',
    // 'Access-Control-Request-Headers':  'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  },
});
export default api;
