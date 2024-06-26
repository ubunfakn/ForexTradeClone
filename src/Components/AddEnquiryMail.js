import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddEnquiryMail() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Enquiry Mail
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: "17px" }}>Add New Enquiry Mail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Name</h6></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                autoFocus
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>User Email</h6></Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="User Email"
                                autoFocus
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>User Password</h6></Form.Label>
                            <Form.Control
                                type='password'
                                placeholder="User Password"
                                style={{ fontSize: "13px" }}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Host Name</h6></Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="Host Name"
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Port Number</h6></Form.Label>
                            <Form.Control
                                type='number'
                                placeholder="Port Number"
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Security Crypto</h6></Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="Security Crypto"
                                style={{ fontSize: "13px" }}
                            />
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

export default AddEnquiryMail;