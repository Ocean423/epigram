import { BASE_URL } from '@/constants/apiConstants';
import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
