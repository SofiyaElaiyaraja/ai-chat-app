export interface Message {
  _id: string;
  chatId: string;
  text: string;
  sender: 'user' | 'assistant';
  createdAt: string;
}