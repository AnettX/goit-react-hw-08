import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const ConfirmModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <>
      <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm contact deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this contact?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onDelete}>
            Yes, delete
          </Button>
          <Button variant="primary" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
