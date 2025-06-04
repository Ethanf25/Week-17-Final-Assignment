import React from 'react'; // Import React to build the component
import { Modal, Button } from 'react-bootstrap'; // Use Bootstrap components for styling
import '../App.css'; // Apply custom styles from App.css

// Define the props the modal expects to work properly
interface ConfirmModalProps {
  show: boolean; // Controls whether the modal is visible
  onHide: () => void; // Function to close the modal
  onConfirm: () => void; // Function to confirm the action
  title?: string; // Optional custom title
  body?: string; // Optional custom message
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  show,
  onHide,
  onConfirm,
  title = 'Confirm', // Default title if none provided
  body = 'Are you sure?', // Default message if none provided
}) => (
  <Modal show={show} onHide={onHide} centered className="confirm-modal"> {/* Center the modal on screen */}
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title> {/* Display the modal title */}
    </Modal.Header>
    <Modal.Body>{body}</Modal.Body> {/* Show the confirmation message */}
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>Cancel</Button> {/* Cancel closes the modal */}
      <Button variant="danger" onClick={() => { onConfirm(); onHide(); }}>Delete</Button> {/* Delete confirms and closes */}
    </Modal.Footer>
  </Modal>
);

export default ConfirmModal; // Export so it can be used elsewhere
