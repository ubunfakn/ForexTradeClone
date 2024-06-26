import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddTestimonialModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Testimonial
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: "17px" }}>Add New Testimonial</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Testimonial Name</h6></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Testimonial Name"
                                autoFocus
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Testimonial Designation</h6></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Testimonial Designation"
                                autoFocus
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Testimonial Quote</h6></Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Testimonial Quote"
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Testimonial Image</h6></Form.Label>
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

export default AddTestimonialModal;