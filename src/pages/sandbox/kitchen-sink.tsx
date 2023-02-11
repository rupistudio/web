import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  Container,
  Stack,
} from '@chakra-ui/react';
import { NextPage } from 'next';

import { PageLayout } from '@/components';
import { capitalize } from '@/utils';
import Link from 'next/link';

export const AccordionBox: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <AccordionItem border="1px" borderColor="gray.300" rounded="md" my={2}>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          <chakra.p fontWeight="bold" color="primary">
            {capitalize(title)}
          </chakra.p>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>{children}</AccordionPanel>
    </AccordionItem>
  );
};

const KitchenSink: NextPage = () => {
  const box = {
    w: 'full',
    h: 'full',
    p: 5,
    rounded: 'md',
    borderColor: 'gray.200',
    shadow: 'sm',
  };
  return (
    <PageLayout>
      <Container maxW="container.xl">
        KitchenSink
        <Accordion allowMultiple>
          <AccordionBox title="Font Sizes">
            <Stack
              direction="row"
              h="full"
              alignItems="center"
              position="relative"
              gap={3}
              backgroundColor="#FFEAD6"
              p={6}
              borderBottomRadius="md"
              borderTop="1px"
              borderColor="gray.200"
            >
              <Box w="full" flex={1}>
                {['h1', 'h2', 'h3', 'h4', 'title'].map((heading) => (
                  <chakra.p key={heading} textStyle={heading}>
                    This is a {heading} element
                  </chakra.p>
                ))}
              </Box>
              <Box as="hr" borderRight="2px" borderColor="gray.400" h="200px" />
              <Box w="96">
                {['body', 'description', 'stat', 'tiny'].map((textStyle) => {
                  return (
                    <chakra.p key={textStyle} textStyle={textStyle}>
                      This is a {textStyle} example
                    </chakra.p>
                  );
                })}
                <Link href="#">This is a link</Link>
              </Box>
            </Stack>
          </AccordionBox>
          <AccordionBox title="Colors">
            <Stack direction="row" my={12} minH={64}>
              <Stack
                direction="row"
                w="full"
                h="full"
                flex={1}
                bg="bg"
                border="1px"
                borderColor="gray.200"
                rounded="md"
                p={5}
                shadow="sm"
              >
                <Box {...box} bg="#ffead6" shadow="md">
                  <Box {...box} bg="#ffdfc2" shadow="md">
                    <Box {...box} bg="#ffd5ad" shadow="md">
                      <Box {...box} bg="#ffca99" shadow="md">
                        <Stack w="full" h="full" direction="row">
                          {['text', 'primary', 'secondary', 'accent'].map(
                            (token) => (
                              <Box {...box} bg={token}>
                                {token}
                              </Box>
                            )
                          )}
                        </Stack>
                        <Stack w="full" h="full" direction="row" mt={3}>
                          {['error', 'warning', 'success', 'link'].map(
                            (token) => (
                              <Box {...box} bg={token}>
                                {token}
                              </Box>
                            )
                          )}
                        </Stack>
                        <Stack w="full" h="full" direction="row" mt={3}>
                          {['barBg', 'navLink', 'placeholder', 'root'].map(
                            (token) => (
                              <Box {...box} bg={token}>
                                {token}
                              </Box>
                            )
                          )}
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Stack>
              <Box w="full" flex={1} bg="bg" border="1px" rounded="md"></Box>
            </Stack>
          </AccordionBox>
        </Accordion>
      </Container>
    </PageLayout>
  );
};

export default KitchenSink;
