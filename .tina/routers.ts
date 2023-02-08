export const routers = {
  post: ({ document }) => `/demo/blog/${document._sys.filename}`,
  page: ({ document }) => {
    if (document._sys.filename === 'home') {
      return '/home';
    }
    return `/${document._sys.filename}`;
  },
};
