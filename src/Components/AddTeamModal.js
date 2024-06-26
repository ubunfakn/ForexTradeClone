import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddTeamModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Team Member
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: "17px" }}>Add New Team Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Team Member Name</h6></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Team Member Name"
                                autoFocus
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Team Member Designation</h6></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Team Member Designation"
                                autoFocus
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Team Member About</h6></Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Team Member About"
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Team Member Image</h6></Form.Label>
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

export default AddTeamModal;