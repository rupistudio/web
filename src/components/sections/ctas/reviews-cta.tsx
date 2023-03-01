import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import type { Maybe, PageSectionsReviewsCta } from '.tina';

type ReviewsProps =
  | {
      image?: {
        src: Maybe<string> | undefined;
      };
      cta?: string;
      description?: string;
    }
  | PageSectionsReviewsCta;
// | ServiceSectionsReviewsCta;

const REVIEW_LINK = 'https://g.page/r/CayHOXxMm1-CEBM/review';

export const ReviewsCTA: React.FC<ReviewsProps> = ({
  image = { src: '/uploads/assets/rupi-google-review.jpeg' },
  cta = 'Share your experience with the world.',
  description = 'We love to hear about your experience, and we know others do too. Leave us a review and let us know how we did. We appreciate your feedback!',
}) => {
  return (
    <Container
      as="section"
      position="relative"
      w="full"
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      centerContent
      p={{ base: 4, md: 16 }}
      bg="white"
      borderRadius="3xl"
      mb={12}
    >
      <Flex
        w="full"
        justifyContent={{ xs: 'center' }}
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
      >
        <Box mr={24} w="full">
          <Image
            src={String(image?.src)}
            alt="Rupi Beauty Studio Google Reviews"
            width={400}
            height={400}
          />
        </Box>
        <VStack w="full" minW="50%" justifyContent="center" gap={4}>
          <chakra.h2 lineHeight="short">{cta}</chakra.h2>
          <chakra.p fontSize="lg">{description}</chakra.p>
          <Box alignSelf="flex-start">
            <Button as={Link} href={REVIEW_LINK} colorScheme="teal">
              Review us on Google
            </Button>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};
