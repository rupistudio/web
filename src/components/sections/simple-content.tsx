import { Box, Heading, Stack, Text } from '@chakra-ui/react';

import type { PageSectionsContent, ServiceSectionsContent } from '.tina';

export const SimpleContent: React.FC<
  PageSectionsContent | ServiceSectionsContent
> = (props) => {
  return props?.text ? (
    <Box as={Stack} layerStyle={`content.${props.style}`}>
      {props?.heading ? (
        <Heading textStyle={`content.heading.${props.style}`}>
          {props.heading}
        </Heading>
      ) : null}
      {props?.text ? (
        <Text textStyle={`content.text.${props.style}`}>{props?.text}</Text>
      ) : null}
    </Box>
  ) : null;
};
