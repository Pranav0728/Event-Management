import axios from 'axios';

const nodeApi = axios.create({
  baseURL: 'https://event-management-backend-five.vercel.app',
});

export default nodeApi; 