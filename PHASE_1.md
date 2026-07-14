# Phase 1 – Complete the Chat Experience (1–2 days)

This document outlines the first project phase: implementing the essential chat app behaviors and UI refinements for a polished messaging experience.

## Goal

Build the core chat experience users expect from a modern mobile assistant app.

## Phase 1 Checklist

- ✅ Auto-scroll to latest message
- ✅ Keyboard avoiding behavior
- ✅ Empty state
- ✅ Message timestamps
- ✅ Typing indicator ("AI is typing...")
- ✅ Loading animation while waiting
- ✅ Better message spacing
- ✅ Long press to copy message
- ✅ Markdown rendering
- ✅ Code blocks
- ✅ Light/Dark theme support

## Scope

### User experience
- Automatically scroll the conversation list when a new message is added.
- Keep the message input visible when the keyboard is open.
- Display an empty state or welcome prompt if no messages exist.
- Show timestamps for messages to make the conversation timeline clear.
- Add a typing indicator and loader for simulated AI response delays.
- Improve bubble spacing and visual rhythm.
- Allow long press on a message bubble to copy text to clipboard.

### Content rendering
- Support Markdown formatting inside assistant and user messages.
- Render code blocks cleanly with monospaced styling.

### Theme support
- Provide both Light and Dark modes.
- Use consistent color tokens and theme-aware styling.

## Implementation Notes

- Keep the chat screen architecture simple: `ChatScreen` manages message state and UI flow.
- Add theme tokens in `src/theme` and use them across components.
- Use `FlatList` references to scroll to the latest item on new messages.
- Use `KeyboardAvoidingView` and safe area handling for keyboard-aware layout.
- Use localized state to simulate loading and typing before AI messages appear.
- Add Markdown parsing/rendering with a lightweight library or custom renderer.
- Add clipboard support using React Native's clipboard API.

## Deliverables

- Updated `src/screens/ChatScreen.tsx`
- New or improved components for timestamps, indicators, and copy actions
- Theme configuration files for light and dark modes
- UX improvements for chat spacing and input behavior

## Next phase planning

After Phase 1, the project can move to AI integration, navigation screens, and more advanced assistant features.
