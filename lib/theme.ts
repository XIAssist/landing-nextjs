/**
 * 테마 설정 파일
 * 색상, 폰트, 간격 등을 한 곳에서 관리
 */

// CSS 변수로 사용할 색상 (globals.css와 동기화)
export const themeColors = {
  background: '#121C21',
  foreground: '#ededed',
  primary: '#ff8f00',
} as const;

// Tailwind CSS 클래스명으로 사용할 컬러
export const tailwindColors = {
  background: 'bg-[#121C21]',
  backgroundOverlay: 'bg-[#121C21]/80',
  foreground: 'text-[#ededed]',
  primary: {
    default: 'bg-primary-500',
    hover: 'hover:bg-primary-600',
    text: 'text-primary-500',
    textHover: 'hover:text-primary-500',
  },
  secondary: {
    default: 'bg-[#2196F3]',
    hover: 'hover:bg-[#1976D2]',
    text: 'text-[#2196F3]',
    textHover: 'hover:text-[#2196F3]',
  },
  text: {
    white: 'text-white',
    gray300: 'text-gray-300',
    gray400: 'text-gray-400',
    gray500: 'text-gray-500',
    gray600: 'text-gray-600',
    gray700: 'text-gray-700',
    white90: 'text-white/90',
  },
  border: {
    gray700: 'border-gray-700',
  },
  bg: {
    gray200: 'bg-gray-200',
    gray300: 'bg-gray-300',
    fromGray200: 'from-gray-200',
    toGray300: 'to-gray-300',
  },
} as const;

// 타이포그래피
export const typography = {
  heading: {
    hero: 'text-5xl font-bold text-white md:text-6xl lg:text-7xl drop-shadow-2xl',
    section: 'text-3xl font-bold text-white md:text-4xl lg:text-5xl',
    card: 'text-xl font-bold text-white md:text-2xl',
    logo: 'text-xl font-bold text-white',
  },
  body: {
    large: 'text-lg text-white/90 md:text-xl lg:text-2xl drop-shadow-lg',
    medium: 'text-base text-gray-300 md:text-lg',
    small: 'text-sm text-gray-300 md:text-base',
    xs: 'text-xs text-gray-500',
    sm: 'text-sm text-gray-500',
    nav: 'text-sm font-medium text-gray-300 hover:text-primary-500 transition-colors',
    link: 'text-gray-300 hover:text-primary-500 transition-colors',
    footerTitle: 'font-semibold text-white',
    footerText: 'text-gray-300',
    footerCopyright: 'text-sm text-gray-400',
  },
} as const;

// 레이아웃
export const layout = {
  // 공통 레이아웃 클래스
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  containerWide: 'mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8', // Header, Features 등에서 사용
  section: 'w-full py-20 lg:py-32',
  
  // Header 컴포넌트
  header: {
    section: 'sticky top-0 z-50 w-full border-b border-gray-700 bg-[#121C21]/80 backdrop-blur-sm',
    container: 'mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8',
  },
  
  // Hero 컴포넌트
  hero: {
    section: 'relative min-h-screen w-full flex items-center justify-center overflow-hidden',
    container: 'relative z-10 w-full',
    content: 'mx-auto max-w-4xl text-center',
  },

  // Features 컴포넌트
  features: {
    section: 'flex min-h-screen items-center py-10 lg:py-32',
    container: 'mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8',
    grid: 'grid gap-0 lg:grid-cols-3 lg:items-center',
  },
  
  // Gallery 컴포넌트
  gallery: {
    section: 'w-full bg-[#121C21] py-10 lg:py-16',
    header: 'mb-12 text-center',
    title: 'mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl',
    subtitle: 'text-lg text-gray-300 md:text-xl',
    imageCard: 'group relative aspect-video cursor-pointer overflow-hidden transition-transform hover:scale-105',
    imageCardSquare: 'group relative aspect-square cursor-pointer overflow-hidden transition-transform hover:scale-105',
    imagePlaceholder: 'flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300',
  },
  
  // ValueProposition 컴포넌트
  valueProposition: {
    section: 'flex items-center py-10 lg:py-16',
    content: 'mx-auto max-w-4xl text-center',
    subtitle: 'mb-8 text-2xl font-bold text-gray-400 md:text-3xl lg:text-4xl',
    title: 'text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-[1.6]',
  },
  
  // Footer 컴포넌트
  footer: {
    section: 'w-full border-t border-gray-700 bg-[#121C21] py-12',
  },
} as const;

