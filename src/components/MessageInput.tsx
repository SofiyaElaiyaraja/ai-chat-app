import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

import {Spacing} from '../theme/spacing';
import {useTheme} from '../theme/theme';

interface Props {
  onSend: (message: string) => void;
}

const MessageInput = ({onSend}: Props) => {
  const [text, setText] = useState('');
  const theme = useTheme();

  const handleSend = () => {
    const value = text.trim();

    if (!value) {
      return;
    }

    onSend(value);
    setText('');
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surface,
          borderTopColor: theme.border,
        },
      ]}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons
          name="add"
          size={24}
          color={theme.subText}
        />
      </TouchableOpacity>

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.input,
            color: theme.text,
          },
        ]}
        placeholder="Ask me anything..."
        placeholderTextColor={theme.subText}
        value={text}
        onChangeText={setText}
        multiline
      />

      <TouchableOpacity
        style={[
          styles.sendButton,
          {
            backgroundColor: theme.primary,
          },
        ]}
        onPress={handleSend}>
        <Ionicons
          name="arrow-up"
          size={20}
          color="#FFFFFF"
        />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: Spacing.md,
    borderTopWidth: 1,
  },

  iconButton: {
    marginRight: 8,
    marginBottom: 8,
  },

  input: {
    flex: 1,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxHeight: 120,
  },

  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});