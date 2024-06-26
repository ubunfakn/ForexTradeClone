import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function AddEnquiryMail({ variant, isUpdate }) {
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
        {isUpdate ? <FontAwesomeIcon icon={faEdit} /> : 'Add New Enquiry Email'}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "17px" }}>{isUpdate ? 'Update Enquiry Mail' : 'Add New Enquiry Mail'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Name"
                    autoFocus

                    isInvalid={!!errors.name}
                  />
                )}
              />
              {errors.name && (
                <Form.Control.Feedback type="invalid">
                  {errors.name.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="userEmail" className="mt-3">
              <Form.Label>User Email</Form.Label>
              <Controller
                name="userEmail"
                control={control}
                rules={{ required: "User Email is required", pattern: /^\S+@\S+$/i }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="email"
                    placeholder="User Email"

                    isInvalid={!!errors.userEmail}
                  />
                )}
              />
              {errors.userEmail && (
                <Form.Control.Feedback type="invalid">
                  {errors.userEmail.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="userPassword" className="mt-3">
              <Form.Label>User Password</Form.Label>
              <Controller
                name="userPassword"
                control={control}
                rules={{ required: "User Password is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type='password'
                    placeholder="User Password"

                    isInvalid={!!errors.userPassword}
                  />
                )}
              />
              {errors.userPassword && (
                <Form.Control.Feedback type="invalid">
                  {errors.userPassword.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="hostName" className="mt-3">
              <Form.Label>Host Name</Form.Label>
              <Controller
                name="hostName"
                control={control}
                rules={{ required: "Host Name is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type='text'
                    placeholder="Host Name"

                    isInvalid={!!errors.hostName}
                  />
                )}
              />
              {errors.hostName && (
                <Form.Control.Feedback type="invalid">
                  {errors.hostName.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="portNumber" className="mt-3">
              <Form.Label>Port Number</Form.Label>
              <Controller
                name="portNumber"
                control={control}
                rules={{ required: "Port Number is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type='number'
                    placeholder="Port Number"

                    isInvalid={!!errors.portNumber}
                  />
                )}
              />
              {errors.portNumber && (
                <Form.Control.Feedback type="invalid">
                  {errors.portNumber.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="securityCrypto" className="mt-3">
              <Form.Label>Security Crypto</Form.Label>
              <Controller
                name="securityCrypto"
                control={control}
                rules={{ required: "Security Crypto is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type='text'
                    placeholder="Security Crypto"

                    isInvalid={!!errors.securityCrypto}
                  />
                )}
              />
              {errors.securityCrypto && (
                <Form.Control.Feedback type="invalid">
                  {errors.securityCrypto.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Button variant="secondary" className='mt-4' onClick={handleClose}>
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

export default AddEnquiryMail;
