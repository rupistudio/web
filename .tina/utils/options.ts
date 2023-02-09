export const mapOptions = (val: string) => ({
  key: val,
  label: val,
  value: val,
});

const colors = [
  'whiteAlpha',
  'blackAlpha',
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
];
const colorShades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

const colorTokens = [
  'bg',
  'text',
  'primary',
  'secondary',
  'accent',
  'error',
  'warning',
  'success',
  'gray',
  'link',
  'barBg',
  'navLink',
  'placeholder',
  'rootBorder',
].map(mapOptions);

export const options = {
  sizes: [
    'max',
    'min',
    'full',
    '3xs',
    '2xs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
    'container.sm',
    'container.md',
    'container.lg',
    'container.xl',
  ].map(mapOptions),
  space: [
    '0',
    'px',
    '0.5',
    '1',
    '1.5',
    '2',
    '2.5',
    '3',
    '3.5',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '14',
    '16',
    '20',
    '24',
    '28',
    '32',
    '36',
    '40',
    '44',
    '48',
    '52',
    '56',
    '60',
    '64',
    '72',
    '80',
    '96',
  ].map(mapOptions),
  zIndex: [
    'hide',
    'auto',
    'base',
    'docked',
    'dropdown',
    'sticky',
    'banner',
    'overlay',
    'modal',
    'popover',
    'skipLink',
    'toast',
    'tooltip',
  ].map(mapOptions),
  position: [
    'top',
    'right',
    'center',
    'bottom',
    'left',
    'top left',
    'top right',
    'top center',
    'center top',
    'center right',
    'center bottom',
    'center center',
    'center left',
    'bottom left',
    'bottom right',
    'bottom center',
    'left top',
    'left center',
    'left bottom',
    'right top',
    'right center',
    'right bottom',
  ].map(mapOptions),
  typography: {
    fontFamily: [
      'body',
      'heading',
      'h1',
      'h2',
      'h3',
      'h4',
      'description',
      'stat',
      'tiny',
      'title',
    ].map(mapOptions),
    fontSize: [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      '5xl',
      '6xl',
      '7xl',
      '8xl',
    ].map(mapOptions),
    fontWeight: [
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ].map(mapOptions),
    lineHeight: [
      'normal',
      'none',
      'shorter',
      'short',
      'base',
      'tall',
      'taller',
    ].map(mapOptions),
    letterSpacing: [
      'tighter',
      'tight',
      'normal',
      'wide',
      'wider',
      'widest',
    ].map(mapOptions),
    textAlign: ['left', 'center', 'right', 'justify'].map(mapOptions),
    textTransform: ['uppercase', 'lowercase', 'capitalize', 'normal'].map(
      mapOptions
    ),
    textDecor: ['none', 'underline', 'line-through', 'overline'].map(
      mapOptions
    ),
  },
  decorative: {
    border: [
      'none',
      'solid',
      'dashed',
      'dotted',
      'double',
      '1px',
      '2px',
      '4px',
      '8px',
    ].map(mapOptions),
    rounded: [
      'none',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      'full',
      'inherit',
      'initial',
    ].map(mapOptions),
    shadow: [
      'none',
      'xs',
      'xs-dark',
      'sm',
      'sm-dark',
      'md',
      'md-dark',
      'lg',
      'dark-lg',
      'xl',
      'xl-dark',
      '2xl',
      '2xl-dark',
      'initial',
      'inherit',
      'inner',
      'inner-dark',
      'base',
      'base-dark',
    ].map(mapOptions),
  },
  colors: colorTokens.concat(
    colors
      // @NOTE: we're using a '-' instead of a '.' to separate the color and shade tokens
      // because we're using css variables on the front-end to set these values which requires the '-'
      .map((color) =>
        colorShades.map((shade) => mapOptions(`${color}-${shade}`))
      )
      .flat()
  ),
};
