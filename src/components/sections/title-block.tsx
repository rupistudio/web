import { Box, Heading, VStack } from '@chakra-ui/react';
import Image from 'next/image';

import type { PageSections } from '.tina';
import type { As } from '@chakra-ui/react';
import type { FC } from 'react';

type Title = {
  title?: string | null | undefined;
  as?: string | null | undefined;
};

export const TitleBlock: FC<
  Title
  // | (CategoriesBlocksSectionTitle & HeadingAs)
> = ({ title, as = 'h1' }) => {
  return (
    <VStack mt={28} mb={9}>
      <Heading
        as={as as As<any>}
        color="gray.600"
        textStyle={as as string}
        mb="-1em"
        textTransform="capitalize"
        // data-tinafield="title"
      >
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
