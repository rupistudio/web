import { AspectRatio, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import type { ServiceSectionsServiceMenuTypes } from '.tina';
import { truncate } from '@/utils';

export const OptionCard: React.FC<
  ServiceSectionsServiceMenuTypes | ServiceSectionsServiceMenuTypes
> = (props) => {
  return (
    <Stack
      direction="column"
      bg="white"
      maxW="2xl"
      w="full"
      borderRadius="lg"
      overflow="hidden"
    >
      <Flex layerStyle="card.header" position="relative" w="100%">
        {props?.type?.price ? (
          <Box
            position="absolute"
            zIndex={2}
            bottom={4}
            left={0}
            boxSize={16}
            border="1px"
            _after={{
              content: '""',
              position: 'absolute',
              width: 'full',
              height: 'full',
              background: 'white',
              bottom: 4,
              left: 2,
              zIndex: -1,
              opacity: 0.7,
              rounded: '100%',
              minH: '16',
            }}
          >
            <Flex w="full" justify="center" ml={1.5} mt={1}>
              <Heading
                px={2}
                color="gray.600"
                fontWeight={600}
                fontFamily="body"
                fontSize={{ base: 'md', xl: '2xl' }}
                // data-tinafield="price"
              >
                ${props?.type?.price}
              </Heading>
            </Flex>
          </Box>
        ) : null}
        {props?.type?.image ? (
          <AspectRatio boxSize="100%">
            <Image
              fill={true}
              src={String(props?.type?.image?.src)}
              alt={String(props?.type?.image?.alt)}
              style={{ objectFit: 'cover' }}
            />
          </AspectRatio>
        ) : null}
      </Flex>
      <Stack layerStyle="card.body" h="full">
        {props.type?.title ? (
          <Text
            px={3}
            textStyle="card.title-sm"
            // data-tinafield="title"
          >
            {props.type?.title}
          </Text>
        ) : null}

        {props.type?.advanced_pricing ? (
          <Box
            as="ul"
            color="gray.700"
            px={3}
            // data-tinafield="advanced_pricing"
          >
            {props?.type.advanced_pricing.length &&
              props.type?.advanced_pricing.map((price) => {
                return (
                  <Flex
                    key={price?.price}
                    as="li"
                    justifyContent="space-between"
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    my={2}
                  >
                    <Text>{price?.unit}</Text>
                    <Text fontWeight="bold" color="teal.500">${price?.price}</Text>
                  </Flex>
                );
              })}
          </Box>
        ) : null}
      </Stack>
    </Stack>
  );
};

export const SimpleOptionCard: React.FC<
  ServiceSectionsServiceMenuTypes | ServiceSectionsServiceMenuTypes
> = (props) => {
  return (
    <Flex
      layerStyle="card.header"
      position="relative"
      rounded="xl"
      w="100%"
      border="4px solid"
      borderColor="primary"
    >
      {props?.type?.price ? (
        <Box
          position="absolute"
          zIndex={2}
          bottom={4}
          left={0}
          boxSize={16}
          _after={{
            content: '""',
            position: 'absolute',
            width: 'full',
            height: 'full',
            backgroundColor: 'secondary',
            bottom: 4,
            left: 2,
            zIndex: -1,
            opacity: 0.7,
            rounded: '100%',
            minH: '16',
            border: '2px solid',
            borderColor: 'white',
          }}
        >
          <Flex w="full" justify="center" ml={1.5} mt={1}>
            <Heading
              px={2}
              color="gray.700"
              fontWeight={600}
              fontFamily="body"
              fontSize={{ base: 'md', xl: '2xl' }}
              // data-tinafield="price"
            >
              ${props?.type?.price}
            </Heading>
          </Flex>
        </Box>
      ) : null}
      <Box
        position="absolute"
        zIndex={2}
        top={1}
        right={1}
        minW="24"
        _after={{
          content: '""',
          position: 'absolute',
          width: 'full',
          height: 'full',
          backgroundColor: 'white',
          borderRadius: 'lg',
          top: 1,
          right: 0,
          zIndex: -1,
          opacity: 0.8,
          minH: '6',
        }}
      >
        <Flex w="full" h="full" justify="flex-end" mt={3} px={3}>
          <Heading
            px={2}
            color="accent"
            fontWeight={600}
            fontFamily="body"
            fontSize={{ base: 'md', xl: '2xl' }}
            // data-tinafield="price"
          >
            {props?.type?.title}
          </Heading>
        </Flex>
      </Box>
      {props?.type?.image ? (
        <AspectRatio boxSize="100%">
          <Image
            fill={true}
            src={String(props?.type?.image?.src)}
            alt={String(props?.type?.image?.alt)}
            style={{ objectFit: 'cover' }}
          />
        </AspectRatio>
      ) : null}
    </Flex>
  );
};
