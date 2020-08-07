import axios, { AxiosResponse, AxiosError } from 'axios';

export const onSuccess = 
  <T extends Object>(response: AxiosResponse<T>) => response.data;

export const onError = 
  (error: AxiosError) => {
    console.error(error);
    throw error;
  };

const api = axios.create({
  // baseURL: '/api',
  baseURL: 'http://localhost:3000/api',
});

export default api;