import axios from 'axios'

export const unAuthorizedClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL + '/api',
    headers: {
        'Content-Type': 'application/ld+json'
    }
})

export const authorizedClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL + '/api',
    headers: {
        'Content-Type': 'application/ld+json',
        Authorization: 'Bearer ' + localStorage.getItem('kadirovdev-accessToken') || null,
    }
})

authorizedClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('kadirovdev-accessToken');
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
});
