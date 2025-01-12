import axios from 'axios';

const nodeApi = axios.create({
  baseURL: 'backendeventurl.vercel.app',
});

export default nodeApi;