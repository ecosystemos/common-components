import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
} from "@chakra-ui/react";

export const ConfirmationDeleteModal = ({
  width,
  height,
  padding,
  title = "Modal Title",
  isModalOpen = false,
  closeModal,
  children = "Modal body content",
}) => {
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay bg="rgba(61, 77, 81, 0.3)" />
        <ModalContent
          borderRadius="4px"
          width={width}
          padding={padding}
          maxWidth="704px"
          height={height}
        >
          <ModalHeader p="0 0 8px 0">
            <Text textStyle="Body.b1" color="gray.600">
              {title}
            </Text>
          </ModalHeader>

          <ModalBody p="0 0 0 " pl={["10px", "16px"]}>
            <Text textStyle="Body.b2" color="gray.500">
              {children}
            </Text>
          </ModalBody>

          {/* Modal Footer */}
          <ModalFooter p="0">
            <Button
              bg="gray.500"
              color="gray.50"
              mr="24px"
              w="76px"
              h="32px"
              fontStyle="italic"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              bg="gray.600"
              color="gray.50"
              w="105px"
              h="32px"
              fontStyle="italic"
            >
              Delete Note
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
ConfirmationDeleteModal.displayName = "ConfirmationDeleteModal";
ConfirmationDeleteModal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  width:
    PropTypes.arrayOf(PropTypes.number) || PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number,
  padding: PropTypes.arrayOf(PropTypes.string),
  isModalOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};
