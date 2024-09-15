import axios from 'axios'

export const unAuthorizedClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL + '/api',
    headers: {
        'Content-Type': 'application/ld+json'
    }
})
