import type { ChakraTheme } from '@chakra-ui/react';
import { mode, type StyleFunctionProps } from '@chakra-ui/theme-tools';

export const styles: ChakraTheme['styles'] = {
  global: (props: StyleFunctionProps) => ({
    '*': {
      border: 0,
      margin: 0,
      padding: 0,
      fontFeatureSettings: `'kern'`,
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      whiteSpace: 'normal', // @FIXME: this maybe a hack: text was not wrapping inside divs
    },
    '*, *::before, *::after': {
      borderColor: 'root',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
    },
    'html, body, #__next, #root': {
      '--chakra-colors-chakra-body-bg': 'var(--chakra-colors-bg)',
      '--chakra-colors-chakra-body-text': 'var(--chakra-colors-text)',
    },
    'html, body': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      scrollBehavior: 'smooth',
      // using % here allows users to override default size in browser settings??
      fontSize: '100%', // == 16px
      fontFamily: 'body',
      height: '100%',
    },
    body: {
      position: 'relative',
      fontFamily: 'body',
      fontSize: '1.5rem',
      lineHeight: 2,
      textRendering: 'optimizeLegibility',
      WebkitTextSizeAdjust: 'none',
      MozFontSmoothing: 'grayscale',
      overflowX: 'auto',
      maxW: 'full',
      backgroundColor: 'var(--chakra-colors-chakra-body-bg)',
    },
    '#__next, #root': {
      display: 'flex',
      flexDirection: 'column',
      minH: '100%',
    },
    '*::placeholder': {
      color: 'muted',
    },
    'input:focus': {
      border: 'inherit',
    },
    'input:focus:invalid': {
      background: 'red.100',
    },
    'input:focus, input:focus:valid': {
      background: 'green.100',
    },
    'a:active, a:focus, a:visited': {
      outline: 0,
      border: 'none',
      outlineStyle: 'none',
      textDecoration: 'none',
      boxShadow: '0 0 0 1px rgba(0, 0, 0, 0) !important',
    },
    a: {
      textDecoration: 'none',
      color: 'link',
    },
    h1: {
      textStyle: 'h1',
    },
    h2: {
      textStyle: 'h2',
    },
    h3: {
      textStyle: 'h3',
    },
    h4: {
      textStyle: 'h4',
    },
    p: {
      textStyle: 'body',
    },
    small: {
      textStyle: 'tiny',
    },
    ol: {
      listStyleType: 'none',
    },
    ul: {
      listStyleType: 'none',
    },
    '.mobile-nav-link:active, .mobile-nav-link:focused, .mobile-nav-link:visited, ':
      {
        color: 'primary.500',
      },
    '.mobile-nav-link:hover': {
      color: 'primary.800',
      textDecoration: 'none',
    },
    '.mobile-nav-link': {
      color: 'primary',
    },
    '[data-trustmary-status]': {
      marginBottom: '3rem',
      backgroundColor: 'var(--chakra-colors-chakra-body-bg)',
    },
  }),
};
