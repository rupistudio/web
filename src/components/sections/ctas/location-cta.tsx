import { Box, chakra, Stack } from '@chakra-ui/react';

import type { PageSectionsLocationCta } from '.tina';
import type { FC } from 'react';

import { MapContainer, ScrollSection } from '../_shared.components';

type LocationCTABlockProps = {
  cta?: string;
  address?: string;
};

export const LocationCTA: FC<
  PageSectionsLocationCta | LocationCTABlockProps
> = (props) => {
  return (
    <ScrollSection>
      <Box zIndex={1} height={500} display="flex" layerStyle="flex.center">
        <Stack
          direction="column"
          justifyContent="center"
          gap={6}
          borderRadius="lg"
          p={8}
          bg="white"
          shadow="lg"
          my={6}
        >
          <chakra.h2
            color="gray.500"
            lineHeight="1"
            textAlign="center"
            textShadow="0px 1px 1px #555"
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            // data-tinafield="cta"
          >
            {props.cta}
          </chakra.h2>
          <Box alignSelf={'center'}>
            <MapContainer address={(props?.address)} />
          </Box>
        </Stack>
      </Box>
    </ScrollSection>
  );
};
