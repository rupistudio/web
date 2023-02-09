import { Center } from '@chakra-ui/react';

import { ChakraNextImage } from 'chakra.ui/components';

import type { FC } from 'react';

import type { PageSectionsLogo, ServiceSectionsLogo } from '.tina';

export const FullLogo: FC = () => (
  <ChakraNextImage
    width="300"
    height="258"
    objectFit="contain"
    src={`/uploads/assets/brand/rupi-new-logo-md.webp`}
    alt="Rupi Beauty Studio"
    priority
  />
);

export type FullLogoBlockProps = {
  image: {
    src?: string | null | undefined;
    alt?: string | null | undefined;
    attr?: string | null | undefined;
    // caption?: string | null | undefined;
  };
};

export const FullLogoBlock: FC<
  FullLogoBlockProps | PageSectionsLogo | ServiceSectionsLogo
> = ({ image }) => (
  <Center>
    <ChakraNextImage
      width="300"
      height="258"
      objectFit="contain"
      src={String(image?.src)}
      alt={String(image?.alt)}
      priority
    />
  </Center>
);
