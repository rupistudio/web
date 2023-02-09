import { PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import type {
  PageSectionsServiceMenu,
  ServiceSectionsServiceMenu,
} from '.tina';

import { unplauralize } from '@/utils/fns';
import { Title } from '../../title';
import {
  OptionCard,
  ServiceCard,
  SimpleOptionCard,
} from './service-menu.components';

export const ServiceMenu: React.FC<
  | (PageSectionsServiceMenu & { category?: string })
  | (ServiceSectionsServiceMenu & { category?: string })
> = (props) => {
  const serviceCols =
    props.services && Number(props.services?.length) > 1
      ? [1, null, null, 2]
      : 1;
  const optionCols =
    props.types && Number(props.types?.length) > 1 ? [1, null, 2, 4] : 1;
  return (
    <>
      {props?.types?.length ? (
        <Stack layerStyle="box.responsive" justify="center" align="center">
          <Title title="Call To Book Your Appointment" as={'h3'} />
          <ButtonGroup size="lg" colorScheme="teal" mx="auto" mt={6}>
            <Button
              as={Link}
              variant="solid"
              leftIcon={<PhoneIcon />}
              href="tel:8625717873"
            >
              Call To Book Now
            </Button>
          </ButtonGroup>
          {props?.category ? (
            <Text textStyle="description" pt={5}>
              Select from any of our professional{' '}
              {unplauralize(String(props?.category))} treatments below:
            </Text>
          ) : null}
        </Stack>
      ) : null}

      {props?.types?.length || props?.services?.length ? (
        <Box
          w="full"
          layerStyle="box.responsive"
          bg="rgba(45, 55, 72, 0.1)" // gray.700
          rounded="xl"
          p={4}
          mt={12}
          mb={24}
        >
          {props?.types?.length ? (
            <SimpleGrid
              w={['full']}
              columns={optionCols}
              gap={[12]}
              p={6}
              m={0}
              mx="auto"
              alignItems="center"
              justifyContent="center"
            >
              {props?.types?.map((type) => {
                if (type?.__typename == 'ServiceSectionsServiceMenuTypes') {
                  if (type.type?.advanced_pricing) {
                    return <OptionCard key={type?.type?.id} {...type} />;
                  }
                  if (type.type?.price && !type.type?.advanced_pricing) {
                    return <SimpleOptionCard key={type?.type?.id} {...type} />;
                  }
                }
                // @FIXME: is this needed?
                // if (
                //   type?.__typename == 'PageSectionsServiceMenuTypes'
                // ) {
                //   return <SimpleOptionCard key={type?.type?.id} {...type} />;
                // }
              })}
            </SimpleGrid>
          ) : null}
          {props?.services?.length ? (
            <>
              {props?.types?.length ? (
                <>
                  <Divider borderColor="currentColor" my={4} />
                  <Heading
                    as="h3"
                    textAlign="center"
                    textDecor="underline"
                    py={6}
                  >
                    More {unplauralize(String(props?.category))} Related
                    Services
                  </Heading>
                </>
              ) : null}
              <SimpleGrid
                w={['full']}
                columns={serviceCols}
                gap={[12]}
                p={6}
                m={0}
                mx="auto"
                alignItems="center"
                justifyContent="center"
              >
                {props?.services &&
                  props?.services.map((service) => {
                    return (
                      <ServiceCard
                        key={service?.service?.id}
                        service={service?.service}
                        category={props?.category}
                      />
                    );
                  })}
              </SimpleGrid>
            </>
          ) : null}
        </Box>
      ) : null}
    </>
  );
};
