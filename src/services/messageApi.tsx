import api from './api';

export const getMessages = async () => {
  const response = await api.get('/messages');
  return response.data;
};

export const createMessage = async (
  text: string,
  sender: 'user' | 'assistant',
) => {
  const response = await api.post('/messages', {
    text,
    sender,
  });

  return response.data;
};

export const updateMessage = async (
  id: string,
  text: string,
) => {
  const response = await api.put(`/messages/${id}`, {
    text,
  });

  return response.data;
};

export const deleteMessage = async (id: string) => {
  const response = await api.delete(`/messages/${id}`);

  return response.data;
};