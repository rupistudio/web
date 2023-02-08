import { AspectRatio, Container } from '@chakra-ui/react';
import Image from 'next/image';

import type { PageSectionsCover } from '.tina';

export const CoverImageBlock: React.FC<PageSectionsCover> = (props) => {
  return props?.image ? (
    <Container
      position="relative"
      w="full"
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      maxH="32vh"
      overflow="hidden"
      rounded="xl"
      shadow="xl"
      p={0}
      my={24}
    >
      <AspectRatio ratio={3 / 1}>
        <Image
          src={String(props?.image?.src)}
          alt={
            props?.image.alt?.trim() +
            ' ' +
            String(props?.image?.attr ? props?.image.attr?.trim() : '')
          }
          fill={true}
          priority
          style={{ objectFit: 'cover' }}
        />
      </AspectRatio>
    </Container>
  ) : null;
};
