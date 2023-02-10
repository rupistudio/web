import {
  AspectRatio,
  Button,
  ButtonGroup,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import type {
  PageSectionsServiceMenuServices,
  ServiceSectionsServiceMenu,
  ServiceSectionsServiceMenuServices,
} from '.tina';

import { getServicePathFromId, truncate } from '@/utils';
import { ServiceBadges } from './service-badges';

export const ServiceCard: React.FC<
  PageSectionsServiceMenuServices | ServiceSectionsServiceMenuServices
> = (props) => {
  const serviceOptions: ServiceSectionsServiceMenu | null | undefined =
    props?.service?.sections
      ?.map((section) => {
        if (section?.__typename == 'ServiceSectionsServiceMenu') {
          return section;
        }
        return null;
      })
      .filter(Boolean)[0];

  const hasOptions = !!serviceOptions?.types?.length;
  const hasServices = !!serviceOptions?.services?.length;
  const serviceLink2 =
    getServicePathFromId(String(props?.service?.id)) ?? '/services';

  return (
    <Stack layerStyle="card.default" direction={{ base: 'column', md: 'row' }}>
      <Flex layerStyle="card.header" borderLeftRadius="xl">
        {props?.service?.image ? (
          <AspectRatio boxSize="100%">
            <Image
              fill={true}
              src={String(props?.service?.image?.src)}
              alt={String(props?.service?.image?.alt)}
              style={{ objectFit: 'cover' }}
            />
          </AspectRatio>
        ) : null}
      </Flex>
      <Stack layerStyle="card.body" h="full">
        {props.service?.title ? (
          <Text as="h3" px={3} textStyle="card.title" data-tinafield="title">
            {props.service?.title}
          </Text>
        ) : null}

        {props.service?.description ? (
          <Text color="gray.700" px={3} data-tinafield="description">
            {truncate(props?.service?.description, 130)}
          </Text>
        ) : null}

        {hasOptions || hasServices ? (
          <>
            <ServiceBadges
              data={serviceOptions}
              hasOptions={hasOptions}
              hasServices={hasServices}
            />
            <Stack
              as={ButtonGroup}
              direction="row"
              w="full"
              mt={'auto'}
              align="center"
              alignSelf="flex-end"
              flex={0}
            >
              <Button
                as={Link}
                href={encodeURI(serviceLink2)}
                flex={1}
                fontSize={'sm'}
                colorScheme="teal"
                _focus={{
                  bg: 'gray.200',
                }}
              >
                See Options
              </Button>
            </Stack>
          </>
        ) : null}
      </Stack>
    </Stack>
  );
};
