import React, { useState } from 'react';
import InstagramPostCreator from './InstagramPostCreator';
import { Modal, Button } from 'react-bootstrap';

const ModalWrapper = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpenModal}>
        Create Post
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Instagram Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InstagramPostCreator closeModal={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalWrapper;
