import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import type { BoxProps, ModalProps } from '@chakra-ui/react';

type CustomModalProps = {
  title?: string;
  footer?: React.ReactNode;
  hasSubmit: boolean;
  allowClose: boolean;
  handler?: {
    label: string;
    action: (event: React.MouseEventHandler<HTMLButtonElement>) => void;
  };
  noOverlay?: boolean;
  bg?: string;
};

export const CHModal: React.FC<ModalProps & BoxProps & CustomModalProps> = ({
  title = '',
  children,
  footer,
  isOpen,
  onClose,
  allowClose = true,
  noOverlay = false,
  bg = 'white',
  ...rest
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onEsc={onClose}
      border="2px solid blue"
      motionPreset="slideInBottom"
      blockScrollOnMount={false}
      size="2xl"
      isCentered={true}
      {...rest}
    >
      {!noOverlay && <ModalOverlay />}
      <ModalContent bg={bg}>
        <ModalHeader textTransform="capitalize">{title}</ModalHeader>
        {allowClose && <ModalCloseButton />}
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {footer}
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
