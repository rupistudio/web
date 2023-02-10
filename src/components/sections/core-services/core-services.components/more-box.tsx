import { Box, Button, chakra } from '@chakra-ui/react';
import Link from 'next/link';

import { Arrow } from '../../_shared.components';

export const MoreBox: React.FC = () => {
  return (
    <Button
      as={Link}
      href="/services"
      position="relative"
      variant="unstyled"
      w="100%"
      h="100%"
      display="block"
    >
      <Box
        position="relative"
        w="1200"
        h="100%"
        p={4}
        bg="#08AEEA"
        bgGradient={`linear(to-br, #08AEEA, #2AF598)`}
        borderRadius="15px"
        boxShadow="0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)"
        _hover={{
          bgGradient: `linear(to-br, #2AF598, #08AEEA)`,
          transform: 'scale(0.95)',
        }}
        transition="all 1s"
      >
        <chakra.h3
          color="white"
          fontFamily="body"
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}
          textAlign="left"
        >
          View More Services
        </chakra.h3>
        <chakra.p
          color="gray.600"
          fontWeight={600}
          textAlign="left"
          lineHeight={1.4}
          fontSize={{ base: 'sm', lg: 'base' }}
        >
          Dermaplaning, Tinting, <br /> Laser Hair Removal & more..
        </chakra.p>
        <Box position="absolute" bottom={6} right={3}>
          <Arrow />
        </Box>
      </Box>
    </Button>
  );
};
