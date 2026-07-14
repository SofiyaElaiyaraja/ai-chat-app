import api from './api';

export const getMessages = async (chatId: string) => {
  const response = await api.get(`/messages/${chatId}`);
  return response.data;
};



export const createMessage = async (
  chatId: string,
  text: string,
  sender: 'user' | 'assistant',
) => {
  const response = await api.post('/messages', {
    chatId,
    text,
    sender,
  });

  return response.data;
};

export const updateMessage = async (
  _id: string,
  text: string,
) => {
  const response = await api.put(`/messages/${_id}`, {
    text,
  });

  return response.data;
};

export const deleteMessage = async (_id: string) => {
  const response = await api.delete(`/messages/${_id}`);

  return response.data;
};

