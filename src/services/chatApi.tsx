import api from './api';

export const createChat = async () => {
  const response = await api.post('/chats');

  return response.data;
};

export const getChats = async () => {
  const response = await api.get('/chats');

  return response.data;
};