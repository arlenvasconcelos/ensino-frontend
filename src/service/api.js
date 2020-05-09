import axios from 'axios';


const api = axios.create({
  baseURL: 'http://coronavis-srv01.nuvem.ufrgs.br',
  mode: 'no-cors',
});

export default api;