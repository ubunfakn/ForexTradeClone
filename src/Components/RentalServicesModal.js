import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function RentalServicesModal({ variant, isUpdate }) {
    const { control, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch('');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();

            // Assuming your API response matches the form field names
            setValue('catalogName', data.catalogName);
            setValue('catalogDescription', data.catalogDescription);
            setValue('catalogDetail', data.catalogDetail);
            setValue('catalogVideoLink', data.catalogVideoLink);
            setValue('categoryName', data.categoryName);
            setValue('modelName', data.modelName);

            // For file inputs, you might need to handle them differently based on your API response
            // Example: setValue('catalogImage', data.catalogImage);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (isUpdate) {
            fetchData();
        }
    }, [isUpdate]);

    const handleClose = () => {
        reset(); // Reset form fields on modal close
        setShow(false);
    };

    const handleShow = () => setShow(true);

    const onSubmit = async (formData) => {
        console.log(formData)
        try {
            setLoading(true);
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(response)
            if (!response.ok) {
                throw new Error('Failed to add catalog');
            }

            console.log('Catalog added successfully!');

        } catch (error) {
            console.error('Error adding catalog:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button variant={variant} onClick={handleShow}>
                {isUpdate ? <FontAwesomeIcon icon={faEdit} /> : 'Add New Product'}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: "17px" }}>{isUpdate ? 'Update Product' : 'Add New Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="productName">
                            <Form.Label>Product Name</Form.Label>
                            <Controller
                                name="productName"
                                control={control}
                                rules={{ required: "Product Name is required" }}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="text"
                                        placeholder="Product Name"
                                        autoFocus

                                        isInvalid={!!errors.productName}
                                    />
                                )}
                            />
                            {errors.productName && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.productName.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="productDescription" className="mt-3">
                            <Form.Label>Product Description</Form.Label>
                            <Controller
                                name="productDescription"
                                control={control}
                                // rules={{ required: "Product Description is required" }}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="text"
                                        placeholder="Product Description"

                                    // isInvalid={!!errors.productDescription}
                                    />
                                )}
                            />
                            {errors.productDescription && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.productDescription.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="categoryName" className="mt-3">
                            <Form.Label>Category Name</Form.Label>
                            <Controller
                                name="categoryName"
                                control={control}
                                rules={{ required: "Category Name is required" }}
                                render={({ field }) => (
                                    <Form.Select
                                        {...field}
                                        aria-label="Category Name"

                                        isInvalid={!!errors.categoryName}
                                    >
                                        <option>Select</option>
                                        <option>Model 1</option>
                                        <option>Model 2</option>
                                        <option>Model 3</option>
                                    </Form.Select>
                                )}
                            />
                            {errors.categoryName && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.categoryName.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="productImage" className="mt-3">
                            <Form.Label>Product Image</Form.Label>
                            <Controller
                                name="productImage"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="file"
                                        accept="image/*"
                                    />
                                )}
                            />
                        </Form.Group>

                        <Button variant="secondary" className='mt-4' onClick={handleClose}>
                            Close
                        </Button>
                        <Button disabled={loading} variant="primary" className='mt-4 ml-2' type="submit">
                            {!loading ? "Submit" : "Saving"}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default RentalServicesModal;
