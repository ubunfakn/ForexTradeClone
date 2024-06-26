import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddCatalogModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Catalog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: "17px" }}>Add New Catalog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Catalog Name</h6></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Catalog Name"
                                autoFocus
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Catalog Description</h6></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Catalog Description"
                                autoFocus
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Catalog Detail</h6></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Catalog Detail"
                                autoFocus
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Catalog Video Link</h6></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Catalog Video Link"
                                autoFocus
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Category Name</h6></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Category Name"
                                autoFocus
                                style={{ fontSize: "13px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray" }}>Model Name</h6></Form.Label>
                            <Form.Select aria-label="Model Name" style={{ fontSize: "13px" }}>
                                <option>Select Model</option>
                                <option>Model 1</option>
                                <option>Model 2</option>
                                <option>Model 3</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray", marginTop:"15px" }}>Catalog Image</h6></Form.Label>
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray", marginTop:"15px" }}>Catalog Detail Image 1</h6></Form.Label>
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray", marginTop:"15px" }}>Catalog Detail Image 2</h6></Form.Label>
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray", marginTop:"15px" }}>Catalog Detail Image 3</h6></Form.Label>
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><h6 style={{ fontSize: "13px", color: "gray", marginTop:"15px" }}>Catalog PDF</h6></Form.Label>
                            <Form.Control type="file" accept=".pdf" />
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

export default AddCatalogModal;