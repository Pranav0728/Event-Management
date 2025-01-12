import axios from 'axios';

const nodeApi = axios.create({
  baseURL: 'event-management-backend-production-82d3.up.railway.app',
});

export default nodeApi;