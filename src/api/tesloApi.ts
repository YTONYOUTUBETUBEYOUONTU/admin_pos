import axios from 'axios';

const apiUrl = import.meta.env.VITE_TESLO_API_URL;

if (!apiUrl) {
  throw new Error('VITE_TESLO_API_URL no está definida en el archivo .env');
}

export const tesloApi = axios.create({
  baseURL: apiUrl,
});

console.log('API URL:', apiUrl);

export default tesloApi;
