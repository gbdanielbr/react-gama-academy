import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dev-marcilio-afya.herokuapp.com/'
})