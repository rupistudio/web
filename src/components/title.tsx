import { Box,Heading,VStack } from '@chakra-ui/react';
import Image from 'next/image';

import type { As } from '@chakra-ui/react';
import type { FC } from 'react';


type Title = { title: string };
type HeadingAs = {
  as?: As<any>;
};

// @NOTE: Used by other blocks to internalize section title
export const Title: FC<Title & HeadingAs> = ({ title, as = 'h1' }) => {
  return (
    <VStack my={12}>
      <Heading as={as} color="gray.600" mb="-1em" textStyle={as as string}>
        {title}
      </Heading>
      <Box
        w={453 / 2}
        h={242 / 2}
        pt={9}
        transform="scale(0.6) rotate(23deg)"
        aria-hidden={true}
      >
        <Image
          src="/uploads/assets/leaves-stem.png"
          alt="Image by pikisuperstar on Freepik"
          width="453"
          height="242"
        />
      </Box>
    </VStack>
  );
};
