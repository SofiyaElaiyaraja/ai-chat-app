import {useColorScheme} from 'react-native';

export const lightTheme = {
  background: '#F8FAFC',
  surface: '#FFFFFF',
  userBubble: '#2563EB',
  aiBubble: '#E2E8F0',
  primary: '#3B82F6',
  text: '#0F172A',
  subText: '#64748B',
  border: '#E2E8F0',
  input: '#F8FAFC',
  icon: '#475569',
  codeBackground: '#E2E8F0',
};

export const darkTheme = {
  background: '#0F172A',
  surface: '#1E293B',
  userBubble: '#2563EB',
  aiBubble: '#334155',
  primary: '#3B82F6',
  text: '#FFFFFF',
  subText: '#94A3B8',
  border: '#334155',
  input: '#111827',
  icon: '#CBD5E1',
  codeBackground: '#0F172A',
};

export type AppTheme = typeof lightTheme;

export const useTheme = (): AppTheme => {
  const scheme = useColorScheme();
  return scheme === 'light' ? lightTheme : darkTheme;
};
