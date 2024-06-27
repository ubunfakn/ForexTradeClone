import React, { useState,useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function CareerModal({ variant, isUpdate }) {
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
    } finally{
      setLoading(false);
    }
  };

  return (
    <>
      <Button variant={variant} onClick={handleShow}>
        {isUpdate ? <FontAwesomeIcon icon={faEdit} /> : 'Add New Vacancy'}
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: "17px" }}>{isUpdate ? 'Update Vacancy' : 'Add New Vacancy'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="positionName">
                            <Form.Label>Position Name</Form.Label>
                            <Controller
                                name="positionName"
                                control={control}
                                rules={{ required: "Position Name is required" }}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="text"
                                        placeholder="Position Name"
                                        style={{ fontSize: "13px" }}
                                        isInvalid={!!errors.positionName}
                                    />
                                )}
                            />
                            {errors.positionName && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.positionName.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="departmentName" className="mt-3">
                            <Form.Label>Department Name</Form.Label>
                            <Controller
                                name="departmentName"
                                control={control}
                                rules={{ required: "Department Name is required" }}
                                render={({ field }) => (
                                    <Form.Select
                                        {...field}
                                        aria-label="Department Name"
                                        style={{ fontSize: "13px" }}
                                        isInvalid={!!errors.departmentName}
                                    >
                                        <option>Select</option>
                                        <option>Department 1</option>
                                        <option>Department 2</option>
                                        <option>Department 3</option>
                                    </Form.Select>
                                )}
                            />
                            {errors.departmentName && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.departmentName.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="location" className="mt-3">
                            <Form.Label>Location</Form.Label>
                            <Controller
                                name="location"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        as="textarea"
                                        rows={3}
                                        placeholder="Location"
                                        style={{ fontSize: "13px" }}
                                    />
                                )}
                            />
                        </Form.Group>

                        <Form.Group controlId="jobDescription" className="mt-3">
                            <Form.Label>Job Description</Form.Label>
                            <Controller
                                name="jobDescription"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        as="textarea"
                                        rows={6}
                                        placeholder="Job Description"
                                        style={{ fontSize: "13px" }}
                                    />
                                )}
                            />
                        </Form.Group>

                        <Form.Group controlId="requirements" className="mt-3">
                            <Form.Label>Requirements</Form.Label>
                            <Controller
                                name="requirements"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        as="textarea"
                                        rows={6}
                                        placeholder="Requirements"
                                        style={{ fontSize: "13px" }}
                                    />
                                )}
                            />
                        </Form.Group>

                        <Form.Group controlId="hiringPolicy" className="mt-3">
                            <Form.Label>Hiring Policy</Form.Label>
                            <Controller
                                name="hiringPolicy"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        as="textarea"
                                        rows={6}
                                        placeholder="Hiring Policy"
                                        style={{ fontSize: "13px" }}
                                    />
                                )}
                            />
                        </Form.Group>

                        <Form.Group controlId="contentImage" className="mt-3">
                            <Form.Label>Content Image</Form.Label>
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>

                        <Button variant="secondary" className="mt-4" onClick={handleClose}>
                            Close
                        </Button>
                        <Button disabled={loading} variant="primary" className='mt-4 ml-2' type="submit">
              {!loading?"Submit":"Saving"}
            </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CareerModal;
