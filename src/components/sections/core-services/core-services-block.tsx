import { AspectRatio, Box, Container, SimpleGrid } from '@chakra-ui/react';

import type { PageSectionsCoreServices } from '.tina';

import { Title } from '../../title';
import { CoreServiceBox, MoreBox } from './core-services.components';

export type Category = {
  category: string;
  image?: {
    src?: string | null | undefined;
    alt?: string | null | undefined;
    attr?: string | null | undefined;
    // caption?: string | null | undefined;
  };
  link: string;
};

export const CoreServicesBlock: React.FC<PageSectionsCoreServices> = (
  props
) => {
  return (
    <Box
      w="full"
      backgroundImage="linear-gradient(180deg, var(--chakra-colors-chakra-body-bg) 0%, var(--chakra-colors-pink-100) 80%, var(--chakra-colors-chakra-body-bg) 100%)" // bg > pink.100
    >
      <Container
        as="section"
        id="services"
        position="relative"
        maxW="container.xl"
        centerContent
        p={{ sm: 12, md: 16 }}
        pt={{ lg: 32 }}
      >
        <Title title={"Rupi's Core Services"} />
        <SimpleGrid
          w="full"
          my={16}
          p={{ base: 4, lg: 12 }}
          gap={9}
          alignItems="center"
          columns={[1, 2, 3]}
          autoRows="1fr"
          justifyContent="center"
          border="6px dashed"
          borderColor="red.200"
          borderRadius="10px"
        >
          {props.services?.length
            ? props.services?.map(
                // @FIXME: update type
                (service: any) =>
                  service?.service && (
                    <CoreServiceBox
                      key={service?.service?.title}
                      item={service?.service}
                    />
                  )
              )
            : null}
          <AspectRatio ratio={16 / 9}>
            <MoreBox />
          </AspectRatio>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
