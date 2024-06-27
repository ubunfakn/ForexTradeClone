import React, { useState,useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function AddTestimonialModal({ variant, isUpdate }) {
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
        {isUpdate ? <FontAwesomeIcon icon={faEdit} /> : 'Add New Testimonial'}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "17px" }}>{isUpdate ? 'Update Testimonial' : 'Add New Testimonial'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="testimonialName">
              <Form.Label>Testimonial Name</Form.Label>
              <Controller
                name="testimonialName"
                control={control}
                rules={{ required: "Testimonial Name is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Testimonial Name"
                    autoFocus
                    
                    isInvalid={!!errors.testimonialName}
                  />
                )}
              />
              {errors.testimonialName && (
                <Form.Control.Feedback type="invalid">
                  {errors.testimonialName.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="testimonialDesignation" className="mt-3">
              <Form.Label>Testimonial Designation</Form.Label>
              <Controller
                name="testimonialDesignation"
                control={control}
                rules={{ required: "Testimonial Designation is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Testimonial Designation"
                    
                    isInvalid={!!errors.testimonialDesignation}
                  />
                )}
              />
              {errors.testimonialDesignation && (
                <Form.Control.Feedback type="invalid">
                  {errors.testimonialDesignation.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="testimonialQuote" className="mt-3">
              <Form.Label>Testimonial Quote</Form.Label>
              <Controller
                name="testimonialQuote"
                control={control}
                // rules={{ required: "Testimonial Quote is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    as="textarea"
                    placeholder="Testimonial Quote"
                    
                    // isInvalid={!!errors.testimonialQuote}
                  />
                )}
              />
              {/* {errors.testimonialQuote && (
                <Form.Control.Feedback type="invalid">
                  {errors.testimonialQuote.message}
                </Form.Control.Feedback>
              )} */}
            </Form.Group>

            <Form.Group controlId="testimonialImage" className="mt-3">
              <Form.Label>Testimonial Image</Form.Label>
              <Controller
                name="testimonialImage"
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
              {!loading?"Submit":"Saving"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddTestimonialModal;
