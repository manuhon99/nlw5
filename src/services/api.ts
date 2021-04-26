import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333'|| 'https://my-json-server.typicode.com/magaliais/podcastr'
})