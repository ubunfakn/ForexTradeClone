import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function AddEmployeeModal() {
    const { control, handleSubmit, reset, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        reset(); // Reset form fields on modal close
        setShow(false);
    };

    const handleShow = () => setShow(true);

    const onSubmit = (data) => {
        console.log(data); // Handle form submission logic here (e.g., API call)
        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Employee
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: "17px" }}>Add New Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="employeeCode">
                            <Form.Label>Employee Code</Form.Label>
                            <Controller
                                name="employeeCode"
                                control={control}
                                rules={{ required: "Employee Code is required" }}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="text"
                                        placeholder="Employee Code"
                                        style={{ fontSize: "13px" }}
                                        isInvalid={!!errors.employeeCode}
                                    />
                                )}
                            />
                            {errors.employeeCode && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.employeeCode.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="employeeName" className="mt-3">
                            <Form.Label>Employee Name</Form.Label>
                            <Controller
                                name="employeeName"
                                control={control}
                                rules={{ required: "Employee Name is required" }}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="text"
                                        placeholder="Employee Name"
                                        style={{ fontSize: "13px" }}
                                        isInvalid={!!errors.employeeName}
                                    />
                                )}
                            />
                            {errors.employeeName && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.employeeName.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="employeeDepartment" className="mt-3">
                            <Form.Label>Employee Department</Form.Label>
                            <Controller
                                name="employeeDepartment"
                                control={control}
                                rules={{ required: "Employee Department is required" }}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="text"
                                        placeholder="Employee Department"
                                        style={{ fontSize: "13px" }}
                                        isInvalid={!!errors.employeeDepartment}
                                    />
                                )}
                            />
                            {errors.employeeDepartment && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.employeeDepartment.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="employeeDateOfBirth" className="mt-3">
                            <Form.Label>Employee Date Of Birth</Form.Label>
                            <Controller
                                name="employeeDateOfBirth"
                                control={control}
                                rules={{ required: "Employee Date Of Birth is required" }}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="date"
                                        placeholder="Employee Date Of Birth"
                                        style={{ fontSize: "13px" }}
                                        isInvalid={!!errors.employeeDateOfBirth}
                                    />
                                )}
                            />
                             {errors.employeeDateOfBirth && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.employeeDateOfBirth.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="employeeType" className="mt-3">
                            <Form.Label>Employee Type</Form.Label>
                            <div>
                                <Controller
                                    name="employeeType"
                                    control={control}
                                    rules={{ required: "Employee Type is required" }}
                                    render={({ field }) => (
                                        <div  style={{flexDirection:"row", display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                                            <Form.Check
                                                {...field}
                                                label="Super"
                                                type="radio"
                                                id="Super"
                                                value="Super"
                                            />
                                            <Form.Check
                                                {...field}
                                                label="Sales Super"
                                                type="radio"
                                                id="SalesSuper"
                                                value="Sales Super"
                                            />
                                            <Form.Check
                                                {...field}
                                                label="Normal"
                                                type="radio"
                                                id="Normal"
                                                value="Normal"
                                            />
                                        </div>
                                    )}
                                />
                            </div>
                            {errors.employeeType && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.employeeType.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Button variant="secondary" className="mt-4" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" className="mt-4 ml-2">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
