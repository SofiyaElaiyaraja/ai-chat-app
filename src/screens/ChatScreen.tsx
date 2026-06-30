import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatHeader from '../components/ChatHeader';
import ChatBubble from '../components/ChatBubble';
import MessageInput from '../components/MessageInput';
import { Message } from '../types/message';
import {Colors} from '../theme/colors';

const ChatScreen = () => {

    const [messages, setMessages] = useState<Message[]>([
  {
    id: '1',
    text: 'Hello 👋 I am your AI Assistant.',
    sender: 'assistant',
    createdAt: new Date(),
  },
]);



const handleSend = (text: string) => {
  const newMessage: Message = {
    id: Date.now().toString(),
    text,
    sender: 'user',
    createdAt: new Date(),
  };

  setMessages(previous => [...previous, newMessage]);
};

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
      <ChatHeader />

     
      <FlatList
  data={messages}
  keyExtractor={item => item.id}
  renderItem={({item}) => (
    <ChatBubble message={item} />
  )}
  contentContainerStyle={{
    padding: 16,
  }}
/>
<MessageInput onSend={handleSend} />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  body: {
    flex: 1,
  },
});