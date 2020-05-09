import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3333',
  mode: 'no-cors',
});

export default api;