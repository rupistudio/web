import { useTina } from 'tinacms/dist/react';

import type { Page, PageQuery } from '.tina';
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';

import client from '.tina/__generated__/client';
import { PageLayout } from '@/components';
import { getBaseUrl } from '@/utils';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>['props'];

const Page: React.FC<PageProps> = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <PageLayout {...props.data.page}>
      <PageBlocks {...props.data.page} />
    </PageLayout>
  );
};

export default Page;

// type PageData = Page[''];
export const PageBlocks: React.FC<Page> = (props) => {
  return (
    <pre>
      {/* {sections?.length &&
        sections?.map((section) => {
          switch (section?.__typename) {
          }
        })} */}
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getTinaPagePaths(),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await getTinaPageProps(context),
  revalidate: 300000,
});

export const getTinaPagePaths = async () => {
  console.log('🦙running gsp1'); // , JSON.stringify(pages.data, null, 2))
  try {
    const pages = await client.queries.pageConnection();
    const paths = pages.data.pageConnection.edges?.map((page) => ({
      params: { page: page?.node?._sys.breadcrumbs },
    }));
    return paths ? paths : [];
  } catch (error) {
    console.error('🔴 | file: [...page].tsx | GSPaths', error);
    return [];
  }
};

export const getTinaPageProps = async (context: GetStaticPropsContext) => {
  console.log('🦙running gsp2'); // , JSON.stringify(pages.data, null, 2))
  try {
    const page = context.params?.page as string[];
    const { data, query, variables } = await client.queries.page({
      relativePath: `/${page.join('/')}.mdx`,
    });

    return {
      data: data as PageQuery,
      query: query,
      variables: variables,
      baseURL: getBaseUrl(),
    };
  } catch (error) {
    console.error('🔴 | file: [...page].tsx | GSProps', error);
    return { notFound: true, redirect: { destination: '/' } };
  }
};
