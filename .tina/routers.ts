export const routers = {
  page: ({ document }) => {
    if (document._sys.filename === 'home') {
      return '/home';
    }
    return `/${document._sys.filename}`;
  },
  service: ({ document }) => {
    const crumbs = document?._sys?.breadcrumbs;
    return `/services/${crumbs.join('/')}`;
  },
};
