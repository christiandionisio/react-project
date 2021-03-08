import axios from 'axios'
import { getToken } from '../config/credentials';

const http = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
});

http.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

const baseApi = () => {
    return {
        get: (endopoint) => http.get(endopoint).then((response => response)),
        post: (endopoint, payload) => http.post(endopoint, payload).then((response => response)),
        put: (endopoint, payload) => http.put(endopoint, payload).then((response => response)),
        delete: (endopoint) => http.delete(endopoint).then((response => response)),
    }
}

export default baseApi