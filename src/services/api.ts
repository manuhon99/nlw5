import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  // configure connection with deployed fake api
})