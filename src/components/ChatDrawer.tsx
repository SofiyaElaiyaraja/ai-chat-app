import React, {useEffect, useRef} from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from '@react-native-vector-icons/ionicons';

import {Chat} from '../types/chat';
import {Colors} from '../theme/colors';

interface Props {
  chats: Chat[];
  onSelect: (id: string) => void;
  onNewChat: () => void;
}

const DRAWER_WIDTH = 300;

const ChatDrawer = ({
  chats,
  onSelect,
  onNewChat,
}: Props) => {
  const translateX = useRef(
    new Animated.Value(-DRAWER_WIDTH),
  ).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{translateX}],
        },
      ]}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.heading}>Chats</Text>

        <Pressable
          style={styles.newChat}
          onPress={onNewChat}>
          <Icon
            name="add-circle-outline"
            size={22}
            color={Colors.text}
          />

          <Text style={styles.newChatText}>
            New Chat
          </Text>
        </Pressable>

        <ScrollView
          showsVerticalScrollIndicator={false}>

          {chats.map((chat, index) => (
            <Pressable
              key={chat._id}
              style={styles.chatItem}
              onPress={() => onSelect(chat._id)}>

              <Icon
                name="chatbubble-outline"
                size={20}
                color={Colors.subText}
              />

              <View style={styles.chatInfo}>
                <Text
                  numberOfLines={1}
                  style={styles.chatTitle}>
                  New Chat {index + 1}
                </Text>

                <Text style={styles.chatDate}>
                  {new Date(chat.createdAt).toLocaleDateString()}
                </Text>
              </View>

            </Pressable>
          ))}

        </ScrollView>
      </SafeAreaView>
    </Animated.View>
  );
};

export default ChatDrawer;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    backgroundColor: Colors.surface,
    zIndex: 100,
    elevation: 20,
  },

  safeArea: {
    flex: 1,
    paddingHorizontal: 18,
  },

  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.text,
    marginTop: 10,
    marginBottom: 20,
  },

  newChat: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 24,
  },

  newChatText: {
    marginLeft: 10,
    color: Colors.text,
    fontWeight: '600',
    fontSize: 16,
  },

  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },

  chatInfo: {
    marginLeft: 12,
    flex: 1,
  },

  chatTitle: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: '600',
  },

  chatDate: {
    color: Colors.subText,
    fontSize: 12,
    marginTop: 4,
  },
});