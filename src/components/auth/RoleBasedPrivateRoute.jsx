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

const RoleBasedPrivateRoute = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { accessToken, userRole } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      onOpen();
    } else if (accessToken && !allowedRole.includes(userRole)) {
      onOpen();
    }
  });

  const handleClose = () => {
    onClose();
    window.location.href = "/login";
  };

  if (accessToken && allowedRole.includes(userRole)) {
    return children;
  } else {
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Access Denied</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              You must be logged in to access this page. Please log in to
              continue.
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClose}>
                Go to Login
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
};
export default RoleBasedPrivateRoute;
