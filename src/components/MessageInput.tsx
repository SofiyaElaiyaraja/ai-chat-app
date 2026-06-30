import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {Colors} from '../theme/colors';
import {Spacing} from '../theme/spacing';

interface Props {
  onSend: (message: string) => void;
}

const MessageInput = ({onSend}: Props) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    const value = text.trim();

    if (!value) {
      return;
    }

    onSend(value);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons
          name="add"
          size={24}
          color={Colors.subText}
        />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Ask me anything..."
        placeholderTextColor={Colors.subText}
        value={text}
        onChangeText={setText}
        multiline
      />

      <TouchableOpacity
        style={styles.sendButton}
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
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },

  iconButton: {
    marginRight: 8,
    marginBottom: 8,
  },

  input: {
    flex: 1,
    backgroundColor: Colors.input,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: Colors.text,
    maxHeight: 120,
  },

  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});