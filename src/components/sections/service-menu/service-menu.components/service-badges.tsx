import { Badge, Stack } from '@chakra-ui/react';

import type {
  PageSectionsServiceMenu,
  ServiceSectionsServiceMenu,
} from '.tina';

export const ServiceBadges: React.FC<{
  data:
    | (ServiceSectionsServiceMenu | PageSectionsServiceMenu)
    | null
    | undefined;
  hasOptions: boolean;
  hasServices: boolean;
}> = ({ data, hasOptions, hasServices }) => {
  const badgeStyles = {
    my: 1,
    variant: 'outline',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxW: ['auto', null, '160px'],
    noOfLines: 1,
  };

  // Only render either options or service badges never both.
  return (
    <Stack
      h="full"
      px={3}
      direction={'row'}
      align={'center'}
      justify="flex-start"
      maxW="240px"
    >
      {hasOptions
        ? data?.types?.slice(0, 2).map((type, i) => {
            return (
              <Badge
                key={`${type?.type?.id}-${i}`}
                {...badgeStyles}
                colorScheme="secondary"
                whiteSpace={['nowrap']}
              >
                {type?.type?.title}
              </Badge>
            );
          })
        : null}
      {!hasOptions && hasServices
        ? data?.services?.slice(0, 2).map((service, i) => {
            return (
              <Badge
                colorScheme="secondary"
                key={`${service?.service?.id}-${i}`}
                {...badgeStyles}
                whiteSpace={['nowrap']}
              >
                {service?.service?.title}
              </Badge>
            );
          })
        : null}
      <Badge my={1} variant="outline" colorScheme="accent">
        {'+ More'}
      </Badge>
    </Stack>
  );
};
