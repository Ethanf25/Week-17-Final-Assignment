import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';

// Modal to confirm delete actions
interface ConfirmModalProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  title?: string;
  body?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  show,
  onHide,
  onConfirm,
  title = 'Confirm',
  body = 'Are you sure?',
}) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{body}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>Cancel</Button>
      <Button variant="danger" onClick={() => { onConfirm(); onHide(); }}>Delete</Button>
    </Modal.Footer>
  </Modal>
);

export default ConfirmModal;
