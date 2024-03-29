import type { ChakraTheme } from '@chakra-ui/react';

export const tokens = {
  colors: {
    bg: {
      default: 'bg.50',
      _dark: '#101819',
    },
    barBg: {
      default: 'bg.100',
      _dark: '#2D3738',
    },
    primary: {
      default: 'primary.800',
      _dark: 'primary.600',
    },
    secondary: {
      default: 'secondary.300',
      _dark: 'secondary.800',
    },
    accent: {
      default: 'accent.700',
      _dark: 'accent.400',
    },
    error: {
      default: '#FF5F5F',
      _dark: '#FD2828',
    },
    warning: {
      default: '#F0DD33',
      _dark: '#F6DF08',
    },
    success: {
      default: '#7AEE9A',
      _dark: '#75E308',
    },
    gray: {
      default: '#B4BFC7',
      _dark: '#707B83',
    },
    link: {
      default: '#3469d4',
      _dark: '#5a83d6',
    },
    navLink: {
      default: 'primary.900',
      _dark: 'primary.700',
    },
    muted: {
      default: 'gray.400',
      _dark: 'gray.300',
    },
    root: {
      default: 'gray.500',
      _dark: 'gray.700',
    },
    text: {
      default: 'gray.700',
      _dark: 'gray.300',
    },
  },
};

export const semanticTokens: ChakraTheme['semanticTokens'] = tokens;
