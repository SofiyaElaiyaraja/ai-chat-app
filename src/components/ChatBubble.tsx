import React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';

import Clipboard from '@react-native-clipboard/clipboard';
import Markdown from 'react-native-markdown-display';

import {Message} from '../types/message';
import MessageTimestamp from './MessageTimestamp';
import {useTheme} from '../theme/theme';

interface Props {
  message: Message;
  onLongPress?: (message: Message) => void;
}

const ChatBubble = ({message, onLongPress}: Props) => {
  const theme = useTheme();

  const isUser = message.sender === 'user';


  // const copyMessage = () => {
  //   Clipboard.setString(message.text);
  //   Alert.alert('Copied', 'Message copied to clipboard.');
  // };

  return (
    <Pressable onLongPress={() => onLongPress?.(message)}>
      <View
        style={[
          styles.wrapper,
          {
            alignItems: isUser ? 'flex-end' : 'flex-start',
          },
        ]}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: isUser
                ? theme.userBubble
                : theme.aiBubble,

              borderBottomRightRadius: isUser ? 6 : 18,
              borderBottomLeftRadius: isUser ? 18 : 6,
            },
          ]}>
          <Markdown
            style={{
              body: {
                color: theme.text,
                fontSize: 16,
              },
              code_block: {
                backgroundColor: theme.codeBackground,
                padding: 12,
                borderRadius: 8,
              },
              code_inline: {
                backgroundColor: theme.codeBackground,
                padding: 2,
                borderRadius: 4,
              },
            }}>
            {message.text}
          </Markdown>

          <MessageTimestamp date={message.createdAt} />
        </View>

        <View
          style={[
            styles.tail,
            isUser
              ? {
                  right: 6,
                  borderTopColor: theme.userBubble,
                }
              : {
                  left: 6,
                  borderTopColor: theme.aiBubble,
                },
          ]}
        />
      </View>
    </Pressable>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 6,
  },

  container: {
    maxWidth: '80%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 18,
  },

  tail: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    marginTop: -2,
  },
});