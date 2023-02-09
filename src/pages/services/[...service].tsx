import { useTina } from 'tinacms/dist/react';

import type { Service, ServiceQuery } from '.tina';

import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';

import client from '.tina/__generated__/client';
import {
  AboutBlock,
  ContactBlock,
  CoverImageBlock,
  DividerBlock,
  HeroBlock,
  LocationCTABlock,
  PageLayout,
  TitleBlock,
  FullLogoBlock
} from '@/components';
import { getBaseUrl } from '@/utils';

type ServiceProps = InferGetStaticPropsType<typeof getStaticProps>['props'];

const Service: React.FC<ServiceProps> = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <PageLayout {...data.service}>
      <ServiceBlocks {...data.service} />
    </PageLayout>
  );
};

export default Service;

export const ServiceBlocks: React.FC<Service> = ({ sections }) => {
  return (
    <>
      {sections?.length &&
        sections?.map((section) => {
          switch (section?.__typename) {
            case 'ServiceSectionsTitle':
              return <TitleBlock {...section} key={section.__typename} />;
            case 'ServiceSectionsCover':
              return <CoverImageBlock {...section} key={section.__typename} />;
            case 'ServiceSectionsDivider':
              return <DividerBlock {...section} key={section.__typename} />;
            case 'ServiceSectionsLogo':
              return <FullLogoBlock {...section} key={section.__typename} />;
          }
        })}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getTinaServicePaths(),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await getTinaServiceProps(context),
  revalidate: 300000,
});

export const getTinaServicePaths = async () => {
  console.log('🦙running gsp1'); // , JSON.stringify(pages.data, null, 2))
  try {
    const services = await client.queries.serviceConnection();
    const paths = services.data.serviceConnection.edges?.map((service) => ({
      params: { service: service?.node?._sys.breadcrumbs },
    }));
    return paths ? paths : [];
  } catch (error) {
    console.error('🔴 | file: [...service].tsx | GSPaths', error);
    return [];
  }
};

export const getTinaServiceProps = async (context: GetStaticPropsContext) => {
  console.log('🦙running gsp2'); // , JSON.stringify(pages.data, null, 2))
  try {
    const service = context.params?.service as string[];
    const { data, query, variables } = await client.queries.service({
      relativePath: `/${service.join('/')}.mdx`,
    });

    return {
      data: data as ServiceQuery,
      query: query,
      variables: variables,
      baseURL: getBaseUrl(),
    };
  } catch (error) {
    console.error('🔴 | file: [...service].tsx | GSProps', error);
    return { notFound: true, redirect: { destination: '/' } };
  }
};
