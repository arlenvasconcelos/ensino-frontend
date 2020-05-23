import axios from 'axios';
import * as storage from './localStorage';

const api = axios.create({
  baseURL: 'http://localhost:3333/api',
  mode: 'no-cors',
});

api.interceptors.request.use(async (config) => {
  const token = storage.getAccessToken();
  const typeToken = storage.getTypeToken();
  if (token) {
    config.headers['Authorization'] = typeToken + " " + token;
  }
  return config;
});

api.interceptors.response.use((res) => {
  if (res.headers['access-token'] && res.headers['access-token'] !== storage.getAccessToken()) {
    storage.setAccessToken(res.headers['access-token']);
    storage.setTypeToken(res.headers['type-token']);
    storage.setRefreshToken(res.headers['refresh-token']);
  }
  return res;
}, (err) => {
  const res = err.response;
  if (res.headers['access-token'] && res.headers['access-token'] !== storage.getAccessToken()) {
    storage.setAccessToken(res.headers['access-token']);
    storage.setTypeToken(res.headers['type-token']);
    storage.setRefreshToken(res.headers['refresh-token']);
  }
  return Promise.reject(err.response);
});

export default api;