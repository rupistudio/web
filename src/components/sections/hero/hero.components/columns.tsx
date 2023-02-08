import { AspectRatio, Box, chakra, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import type { PageSectionsHeroImage } from '.tina';
import type { FC } from 'react';
import type { z } from 'zod';

export const ColumnLeft: FC<{ intro: string; heading: string }> = ({
  intro,
  heading,
}) => {
  return (
    <VStack h="100%" layerStyle="flex.center">
      {intro ? (
        <chakra.p
          fontSize={{ base: '2xl', md: '4xl', lg: '2xl' }}
          fontWeight={600}
          letterSpacing={1.1}
          textAlign={{ base: 'center', lg: 'left' }}
          textShadow="0px 1px 1px #555"
          textTransform="uppercase"
          w="100%"
          mb={6}
          // data-tinafield="intro"
        >
          {intro}
        </chakra.p>
      ) : null}
      <Box position="relative">
        {heading ? (
          <chakra.h1
            color="primary"
            fontSize={{ base: '6xl', sm: '7xl', md: '8Fxl', lg: '7xl' }}
            fontWeight={400}
            lineHeight={1.2}
            textShadow="0px 1px 1px #555"
            textAlign={['center', null, null, 'left']}
            textTransform="capitalize"
          >
            {heading}
          </chakra.h1>
        ) : null}
        <Box
          display={{ base: 'none', sm: 'block' }}
          position="absolute"
          width="188"
          height="190"
          mt={{ sm: -24 }}
          ml={{ sm: '65%', md: '70%', lg: 64 }}
          transform={{ base: 'rotate(23deg) scale(35%)' }}
          zIndex={-1}
        >
          <Image
            src="/leaf.png"
            alt="decorative leaf"
            width="188"
            height="190"
          />
        </Box>
      </Box>
    </VStack>
  );
};

type TinaImage = {
  src?: string;
  alt?: string;
  attr?: string;
  caption?: string;
  // width?: string;
  // height?: string;
};

export const ColumnRight: React.FC<{
  image: TinaImage | PageSectionsHeroImage;
}> = ({ image }) => {
  return (
    <Box
      w="full"
      p={{ base: 0, sm: 0, md: 0, lg: 0 }}
      mb={{ base: 20, sm: 0 }}
      flex={1}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {image && (
        <AspectRatio ratio={1}>
          <Image
            src={String(image?.src)}
            // width={Number(image?.width)}
            // height={Number(image?.height)}
            alt={image.alt + ' | ' + image.attr}
            fill={true}
            priority
          />
        </AspectRatio>
      )}
    </Box>
  );
};
