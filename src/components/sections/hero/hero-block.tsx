import {
  AspectRatio,
  Box,
  chakra,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';

import type { PageSectionsHero, PageSectionsHeroImage } from '.tina';
import type { FC } from 'react';

import { CustomIcon } from 'chakra.ui';

type HeroBlockProps = {
  heading?: string;
  subtitle?: string;
  cta?: string;
  phone?: string;
  image?: {
    src?: string;
    alt?: string;
    attr?: string;
    caption?: string;
  };
};

export const HeroBlock: FC<PageSectionsHero> = (props) => {
  return (
    <Container
      as="section"
      position="relative"
      // maxW="container.responsive"
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      minH="70vh"
      layerStyle="container.responsive"
      pb={16}
      px={[6, 12, 24]}
      overflowX={['hidden', null, null, 'initial']}
    >
      <Stack
        position="relative"
        w="full"
        h="100%"
        justifyContent={['center', null, null, 'center']}
        alignItems={['center', null, null, 'center']}
        direction={['column', null, null, 'row']}
        gap={[20, null, null, 16]}
      >
        {props ? (
          <ColumnLeft
            intro={String(props?.intro)}
            heading={String(props?.heading)}
          />
        ) : null}
        <VStack w="full" h="100%" justifyContent="center" alignItems="center">
          {props?.image ? <ColumnRight image={props?.image} /> : null}
          {props ? (
            <CTABox
              cta={{
                title: String(props?.cta),
                subtitle: String(props?.phone),
              }}
            />
          ) : null}
        </VStack>
      </Stack>
    </Container>
  );
};

export const ColumnLeft: FC<{ intro: string; heading: string }> = ({
  intro,
  heading,
}) => {
  return (
    <VStack h="100%" layerStyle="flex.center" w="full">
      {/* <ResponsiveDebugger colors={['orange', 'purple', 'gray', 'goldenrod']} /> */}
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
            src="/uploads/assets/leaf.png"
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
};

export const ColumnRight: React.FC<{
  image: TinaImage | PageSectionsHeroImage;
}> = ({ image }) => {
  return (
    <Box w="full" minW="500px" mb={{ base: 20, sm: 0 }} flex={1}>
      {image && (
        <AspectRatio ratio={1}>
          <Image
            src={String(image?.src)}
            alt={image.alt + ' | ' + image.attr}
            fill={true}
            priority
          />
        </AspectRatio>
      )}
    </Box>
  );
};

export const CTABox: FC<{ cta: { title: string; subtitle: string } }> = ({
  cta,
}) => (
  <Box
    position="absolute"
    bottom={{ base: 10, md: 24, lg: -4, xl: 12 }}
    height={24}
    bg="barBg"
    rounded="lg"
    shadow="lg"
    borderColor="gray.600"
    border="1px solid"
    zIndex={1}
    _hover={{
      bg: 'bg',
    }}
  >
    <Flex align="center" h="100%" p={{ base: 6, lg: 6 }} gap={1}>
      <VStack layerStyle="flex.center" w="10%">
        <CustomIcon
          icon="phone"
          size={[6, 10, 10, 10]}
          textShadow="0px 2px 3px #555"
          color="gray.600"
        />
      </VStack>
      <Divider transform="rotate(90deg)" w="3em" borderColor="gray.600" />
      <Box textAlign="center" w="full" flex={1}>
        <chakra.p
          display={{ base: 'none', sm: 'block', md: 'block' }}
          data-tinafield="title"
        >
          {cta.title}
        </chakra.p>
        <chakra.p
          fontSize={{ base: '2xl', md: '2xl', xl: '2xl' }}
          fontWeight={600}
          letterSpacing="wider"
          color="gray.600"
          lineHeight="1"
          textAlign="center"
          _hover={{
            cursor: 'pointer',
          }}
          data-tinafield="subtitle"
        >
          {cta.subtitle}
        </chakra.p>
      </Box>
    </Flex>
  </Box>
);
