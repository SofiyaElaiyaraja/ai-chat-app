# AIChatApp

## Project Overview

AIChatApp is a React Native chat application scaffolded with `@react-native-community/cli` and built using TypeScript. The app presents a simple AI assistant chat interface on mobile devices, styled with a dark theme and designed for conversation flow.

## Current Features

- Chat screen with a top header and message list
- Message input field for sending new user messages
- Message bubble UI for user and assistant messages
- Local message state management using React `useState`
- Safe area handling for modern device form factors

## App Structure

### Entry Point
- `App.tsx`
  - Renders the `ChatScreen` component directly.

### Screens
- `src/screens/ChatScreen.tsx`
  - Holds the current message list in state
  - Renders `ChatHeader`, a `FlatList` of message bubbles, and `MessageInput`
  - Adds new messages when the user sends text

### Components
- `src/components/ChatHeader.tsx`
  - Displays app title, subtitle, and online status
  - Uses Ionicons for a decorative icon

- `src/components/ChatBubble.tsx`
  - Shows chat messages
  - Aligns and colors bubbles differently for user vs assistant messages

- `src/components/MessageInput.tsx`
  - Text input for user messages
  - Send button to submit text
  - Local text state and trimming behavior before send

### Types
- `src/types/message.tsx`
  - Defines the `Message` interface with `id`, `text`, `sender`, and `createdAt`

### Theme
- `src/theme/colors.tsx`
  - Central color palette for backgrounds, surfaces, text, borders, and input fields

- `src/theme/spacing.tsx`
  - Standard spacing values used across components

## Dependencies

Key dependencies used in the project:

- `react` and `react-native`
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@react-native-vector-icons/ionicons`
- `react-native-safe-area-context`
- `react-native-screens`

## Notes and Next Steps

- Currently, the chat flow is local only and does not connect to a real AI service.
- The assistant starts with a static greeting message.
- Next enhancements could include:
  - Integrating an AI API backend for real responses
  - Adding message timestamps and loading indicators
  - Supporting voice input or attachments
  - Enhancing navigation and onboarding screens
