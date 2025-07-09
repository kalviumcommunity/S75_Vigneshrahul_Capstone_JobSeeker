import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // replace with Render URL in production
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
