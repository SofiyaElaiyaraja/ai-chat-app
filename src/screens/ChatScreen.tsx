import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Pressable
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  getMessages,
  createMessage, 
  updateMessage,
  deleteMessage,
} from '../services/messageApi';

import {
    createChat,
    getChats,
} from '../services/chatApi';

import ChatHeader from '../components/ChatHeader';
import ChatDrawer from '../components/ChatDrawer';
import ChatBubble from '../components/ChatBubble';
import MessageInput from '../components/MessageInput';
// import TypingIndicator from '../components/TypingIndicator';
// import EmptyState from '../components/EmptyState';

import Clipboard from '@react-native-clipboard/clipboard';

import {Message} from '../types/message';
import {Chat} from '../types/chat';
import {useTheme} from '../theme/theme';

const ChatScreen = () => {
  const theme = useTheme();

  const flatListRef = useRef<FlatList<Message>>(null);

  const [typing, setTyping] = useState(false);

  // const [messages, setMessages] = useState<Message[]>([
  //   {
  //     id: '1',
  //     text: 'Hello 👋 I am your AI Assistant.',
  //     sender: 'assistant',
  //     createdAt: new Date(),
  //   },
  // ]);

  const [messages, setMessages] = useState<Message[]>([]);
  const [chatId, setChatId] = useState('');
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedMessage, setSelectedMessage] =
    useState<Message | null>(null);

  const [drawerVisible, setDrawerVisible] =
useState(false);

useEffect(() => {
  initializeChat();
  loadChats();

}, []);

const initializeChat = async () => {
  try {
    const chat = await createChat();

    console.log('Created Chat:', chat);

    setChatId(chat._id);

    await loadMessages(chat._id);
  } catch (error) {
    console.log(error);
  }
};
const loadChats = async () => {
    const chats = await getChats();

    console.log(chats);
    setChats(chats);
};

const loadMessages = async (chatId: string) => {
  try {
    const data = await getMessages(chatId);

    console.log('Fetched messages:', data);

    setMessages(data);
  } catch (error) {
    console.log(error);
  }
};

const testDelete = async () => {
  try {
    const firstMessage = messages[0];

    if (!firstMessage) {
      return;
    }

    const response = await deleteMessage(firstMessage._id);

    console.log(response);

    await loadMessages(chatId);
  } catch (error) {
    console.log(error);
  }
};

const testUpdate = async () => {
  try {
    const updatedMessage = await updateMessage(
      '1', // Replace with one of your real message IDs
      'This message was updated from React Native!',
    );

    console.log('Updated message:', updatedMessage);

    await loadMessages(chatId);
  } catch (error) {
    console.log(error);
  }
};

const openChat = async (chatId: string) => {

    setChatId(chatId);

    const data = await getMessages(chatId);

    setMessages(data);

    setDrawerVisible(false);
};


const handleEdit = () => {
  Alert.alert(
    'Edit',
    'We will implement editing next.'
  );

  setSelectedMessage(null);
};

const handleCancel = () => {
    setSelectedMessage(null);
};

const handleDelete = async () => {
    if (!selectedMessage) {
        return;
    }

    await deleteMessage(selectedMessage._id);

    await loadMessages(chatId);

    setSelectedMessage(null);
};

const handleCopy = () => {
    if (!selectedMessage) {
        return;
    }

    Clipboard.setString(selectedMessage.text);

    Alert.alert("Copied", "Message copied.");

    setSelectedMessage(null);
};

  const handleSend = async (text: string) => {
    // const userMessage: Message = {
    //   id: Date.now().toString(),
    //   text,
    //   sender: 'user',
    //   createdAt: new Date(),
    // };


    // setMessages(prev => [...prev, userMessage]);

    try {
  const newMessage = await createMessage(chatId, text, 'user');
  console.log('Created message:', newMessage);

  setMessages(prev => [...prev, newMessage]);
} catch (error) {
  console.log(error);
}

    setTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
  _id: Date.now().toString(),
  chatId,
  text: 'This is an AI reply.',
  sender: 'assistant',
  createdAt: new Date().toISOString(),
};

      setMessages(prev => [...prev, aiMessage]);
      setTyping(false);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
          },
        ]}>
        <ChatHeader
        onMenuPress={() => setDrawerVisible(true)}
  selectedMessage={selectedMessage !== null}
  onCopy={handleCopy}
  onEdit={handleEdit}
  onDelete={handleDelete}
  onCancel={handleCancel}
/>
{drawerVisible && (
  <Pressable
    style={styles.overlay}
    onPress={() => setDrawerVisible(false)}
  />
)}  

{drawerVisible && (
  
   <ChatDrawer
  chats={chats}
  onSelect={openChat}
  onNewChat={initializeChat}
/>
)}

        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={item => item._id}
          renderItem={({item}) => <ChatBubble 
            message={item}
            onLongPress={setSelectedMessage}
             />}
          contentContainerStyle={styles.listContent}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({animated: true})
          }
          onLayout={() =>
            flatListRef.current?.scrollToEnd({animated: true})
          }

          // Uncomment after creating EmptyState component
          // ListEmptyComponent={<EmptyState />}
        />

        {/* Uncomment after creating TypingIndicator component */}
        {/* {typing && <TypingIndicator />} */}

        <MessageInput onSend={handleSend} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  listContent: {
    padding: 16,
  },
  overlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.45)',
  zIndex: 90,
},
});