import React, { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const PrivateRoute = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      onOpen();
    }
  });
  if (accessToken) {
    return children;
  } else {
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              unde doloribus blanditiis quam omnis. Est necessitatibus velit
              deleniti enim quo.
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
};
export default PrivateRoute;
