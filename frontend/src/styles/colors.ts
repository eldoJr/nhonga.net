export const colors = {
  // Brand Colors - Nhonga Green Palette
  white: '#FFFFFF',
  nhonga: {
    50: '#F0FCF3',
    100: '#E1FAE7',
    150: '#D2F7DC',
    200: '#C3F5D0',
    300: '#A6EFB8',
    400: '#88EAA1',
    500: '#6AE589', // Primary brand color
    600: '#56BE70',
    700: '#429757',
    800: '#2E6F3F',
    850: '#245C32',
    900: '#1A4826',
    950: '#103519',
    1000: '#06210D'
  },
  
  // Semantic Colors
  primary: '#6AE589',
  secondary: '#429757',
  success: '#56BE70',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Neutral Colors
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
  }
} as const;

export type ColorKey = keyof typeof colors;
export type NhongaColorKey = keyof typeof colors.nhonga;