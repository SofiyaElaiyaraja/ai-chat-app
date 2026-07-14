import axios from 'axios';

const api = axios.create({
  // iOS Simulator
  baseURL: 'http://10.112.223.77:3000',

  // Android Emulator
  // baseURL: 'http://10.0.2.2:3000',

  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;