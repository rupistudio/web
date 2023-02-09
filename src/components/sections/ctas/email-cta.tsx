import { Box,Container,Heading,Text } from '@chakra-ui/react';

import type { PageSectionsEmailCta,ServiceSectionsEmailCta } from '.tina';

import { StaticScrollBackground } from 'chakra.ui';
import { EmailSubscriptionForm } from '../forms';

type EmailCTAProps =
  | {
      image?: {
        src: string;
      };
      cta?: string;
      description?: string;
    }
  | PageSectionsEmailCta
  | ServiceSectionsEmailCta;

export const EmailCTA: React.FC<EmailCTAProps> = ({
  image = { src: '/uploads/people/girl-holding-money-pink-bg.webp' },
  cta = 'Sign Up for our Mailing List.',
  description = 'Get the latest in beauty news, updates, and special offers delivered directly to your inbox. No spam, ever.',
}) => {
  return (
    <Box w="full" my={12}>
      <StaticScrollBackground bgImage={`url(${image?.src})`}>
        <Container
          mr={[24, null, null, 56]}
          mt={28}
          w="full"
          p={[6, null, 9, 16]}
          bg="whiteAlpha.300"
          color="gray.700"
          textShadow="0 0 10px rgba(0,0,0,0.2)"
          boxShadow="0 0 10px rgba(255,255,255,0.4)"
        >
          <Heading
            fontSize={['3xl', null, '5xl']}
            fontWeight={600}
            color="gray.600"
          >
            {cta}
          </Heading>
          <Text fontSize="xl" fontWeight={500} mt={6}>
            {description}
          </Text>
          <EmailSubscriptionForm />
        </Container>
      </StaticScrollBackground>
    </Box>
  );
};
