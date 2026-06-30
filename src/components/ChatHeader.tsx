import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../theme/colors';
import {Spacing} from '../theme/spacing';

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <Icon name="sparkles" size={22} color="#FFFFFF" />
        </View>

        <View>
          <Text style={styles.title}>AI Assistant</Text>
          <Text style={styles.subtitle}>GPT-5 Compatible</Text>
        </View>
      </View>

      <View style={styles.status}>
        <View style={styles.onlineDot} />
        <Text style={styles.onlineText}>Online</Text>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: Colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },

  title: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: '700',
  },

  subtitle: {
    color: Colors.subText,
    marginTop: 2,
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  onlineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#22C55E',
    marginRight: 6,
  },

  onlineText: {
    color: Colors.subText,
    fontWeight: '600',
  },
});