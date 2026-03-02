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
  Text,
} from "@chakra-ui/react";

const RoleBasedPrivateRoute = ({ children, allowedRole = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { accessToken, userRole } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      onOpen();
    } else if (accessToken && !allowedRole.includes(userRole)) {
      onOpen();
    }
  }, [accessToken, userRole, allowedRole, onOpen]);

  const handleClose = () => {
    onClose();
    if (!accessToken) {
      window.location.href = "/login";
    } else {
      window.location.href = "/unauthorized";
    }
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
              {!accessToken ? (
                <Text>
                  You must be logged in to access this page. Please log in to
                  continue.
                </Text>
              ) : (
                <Text>
                  You do not have the necessary permissions to access this page.
                </Text>
              )}
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
