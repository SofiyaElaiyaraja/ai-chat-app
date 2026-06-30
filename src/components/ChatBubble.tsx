import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Message} from '../types/message';

interface Props {
  message: Message;
}

const ChatBubble = ({message}: Props) => {
  const isUser = message.sender === 'user';

  return (
    <View
      style={[
        styles.container,
        {
          alignSelf: isUser ? 'flex-end' : 'flex-start',
          backgroundColor: isUser ? '#2563EB' : '#334155',
        },
      ]}>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    marginVertical: 6,
    padding: 14,
    borderRadius: 18,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});