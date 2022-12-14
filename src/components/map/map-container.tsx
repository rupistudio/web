import { Map } from '@/components';
import { Center } from '@chakra-ui/react';

export const MapContainer = () => {
  return (
    <Center
      ml="auto"
      borderRadius="md"
      p={{ base: 0, md: 4, lg: 6 }}
      boxShadow="md"
      minW="455px"
      minHeight="300px"
      overflow="hidden"
    >
      <Map width={425} height={280} />
    </Center>
  );
};
