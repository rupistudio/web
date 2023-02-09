import { Box, Divider } from '@chakra-ui/react';

type DividerBlockProps = {
  orientation?: 'horizontal' | 'vertical';
  borderColor?: string;
};

export const DividerBlock: React.FC<any> = ({
  orientation = 'horizontal',
  borderColor = 'gray.500',
}) => {
  return (
    <Box w="full" h="full" maxW="85%" maxH="85%" mx="auto" my="auto" py={6}>
      <Divider
        orientation={orientation}
        borderColor={borderColor.replace('-', '.')}
      />
    </Box>
  );
};
