// 색상 값 상수 (globals.css와 동기화)
export const colors = {
  background: '#121C21',
  foreground: '#ededed',
  primary: {
    50: '#fff4e6',
    100: '#ffe0b3',
    200: '#ffcc80',
    300: '#ffb84d',
    400: '#ffa31a',
    500: '#ff8f00', // 메인 primary 컬러
    600: '#cc7200',
    700: '#995500',
    800: '#663800',
    900: '#331c00',
  },
  secondary: {
    50: '#E3F2FD',
    100: '#DCEFFF',
    200: '#BBDEFB',
    300: '#90CAF9',
    400: '#64B5F6',
    500: '#42A5F5',
    600: '#2196F3', // 메인 secondary 컬러
    700: '#1976D2',
    800: '#1E88E5',
    900: '#1565C0',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

// 간격 상수 (spacing)
export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
} as const;

// 브레이크포인트 (Tailwind CSS)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// 컨테이너 최대 너비
export const containerMaxWidth = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

