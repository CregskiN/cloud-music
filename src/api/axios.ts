import axios from 'axios';
import config from '../config';

export const baseURL = config.baseURL;

export const axiosInstance = axios.create({
    baseURL: baseURL
});

axiosInstance.interceptors.response.use(
    res => res,
    err => {
        console.error(err, '网络错误')
    }
);