import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5291',
});

api.interceptors.request.use(async (config) => {

  const accessTokenResponse = await fetch('/api/auth/token');
  const accessToken = await accessTokenResponse.json();

  console.log('api: ' + accessToken);

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});

export default api;