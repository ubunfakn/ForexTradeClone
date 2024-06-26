import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddCategoryModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"17px"}}>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><h6 style={{fontSize:"13px", color:"gray"}}>Category Title</h6></Form.Label>
              <Form.Control
                type="text"
                placeholder="Category Title"
                autoFocus
                style={{fontSize:"13px"}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><h6 style={{fontSize:"13px", color:"gray"}}>Category Description</h6></Form.Label>
              <Form.Control
                type="text"
                placeholder="Category description"
                autoFocus
                style={{fontSize:"13px"}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><h6 style={{fontSize:"13px", color:"gray"}}>Category Image</h6></Form.Label>
              <Form.Control type="file" accept="image/*" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCategoryModal;