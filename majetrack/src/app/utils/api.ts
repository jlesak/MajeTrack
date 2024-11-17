import axios from 'axios';
import "server-only";
import { getAccessToken } from "@auth0/nextjs-auth0";


const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

api.interceptors.request.use(async (config) => {

  const { accessToken } = await getAccessToken();

  console.log('api: ' + accessToken);

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});

export default api;