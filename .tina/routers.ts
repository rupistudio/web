export const routers = {
  page: ({ document }) => {
    if (document._sys.filename === 'home') {
      return '/home';
    }
    return `/${document._sys.filename}`;
  },
  service: ({ document }) => {
    return `/services/${document._sys.filename}`;
  },
};
