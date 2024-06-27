import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function AddCatalogModal({ variant, isUpdate }) {
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
    reset();
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
        {isUpdate ? <FontAwesomeIcon icon={faEdit} /> : 'Add New Catalog'}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "17px" }}>{isUpdate ? 'Update Catalog' : 'Add New Catalog'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="catalogName">
              <Form.Label>Catalog Name</Form.Label>
              <Controller
                name="catalogName"
                control={control}
                rules={{ required: "Catalog Name is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Catalog Name"
                    autoFocus
                    style={{ fontSize: "13px" }}
                    isInvalid={!!errors.catalogName}
                  />
                )}
              />
              {errors.catalogName && (
                <Form.Control.Feedback type="invalid">
                  {errors.catalogName.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="catalogDescription" className='mt-3'>
              <Form.Label>Catalog Description</Form.Label>
              <Controller
                name="catalogDescription"
                control={control}
                rules={{ required: "Catalog Description is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Catalog Description"
                    style={{ fontSize: "13px" }}
                    isInvalid={!!errors.catalogDescription}
                  />
                )}
              />
              {errors.catalogDescription && (
                <Form.Control.Feedback type="invalid">
                  {errors.catalogDescription.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="catalogDetail" className='mt-3'>
              <Form.Label>Catalog Detail</Form.Label>
              <Controller
                name="catalogDetail"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Catalog Detail"
                    style={{ fontSize: "13px" }}
                  />
                )}
              />
            </Form.Group>

            <Form.Group controlId="catalogVideoLink" className='mt-3'>
              <Form.Label>Catalog Video Link</Form.Label>
              <Controller
                name="catalogVideoLink"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Catalog Video Link"
                    style={{ fontSize: "13px" }}
                  />
                )}
              />
            </Form.Group>

            <Form.Group controlId="categoryName" className='mt-3'>
              <Form.Label>Category Name</Form.Label>
              <Controller
                name="categoryName"
                control={control}
                rules={{ required: "Category Name is required" }}
                render={({ field }) => (
                  <Form.Select
                    {...field}
                    aria-label="Category Name"
                    style={{ fontSize: "13px" }}
                    isInvalid={!!errors.categoryName}
                  >
                    <option>Select Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                  </Form.Select>
                )}
              />
              {errors.categoryName && (
                <Form.Control.Feedback type="invalid">
                  {errors.categoryName.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="modelName" className='mt-3'>
              <Form.Label>Model Name</Form.Label>
              <Controller
                name="modelName"
                control={control}
                rules={{ required: "Model Name is required" }}
                render={({ field }) => (
                  <Form.Select
                    {...field}
                    aria-label="Model Name"
                    style={{ fontSize: "13px" }}
                    isInvalid={!!errors.modelName}
                  >
                    <option>Select Model</option>
                    <option>Model 1</option>
                    <option>Model 2</option>
                    <option>Model 3</option>
                  </Form.Select>
                )}
              />
              {errors.modelName && (
                <Form.Control.Feedback type="invalid">
                  {errors.modelName.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="catalogImage" className='mt-3'>
              <Form.Label>Catalog Image</Form.Label>
              <Controller
                name="catalogImage"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="file"
                    accept="image/*"
                    style={{ fontSize: "13px" }}
                  />
                )}
              />
            </Form.Group>

            <Form.Group controlId="catalogDetailImage1" className='mt-3'>
              <Form.Label>Catalog Detail Image 1</Form.Label>
              <Controller
                name="catalogDetailImage1"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="file"
                    accept="image/*"
                    style={{ fontSize: "13px" }}
                  />
                )}
              />
            </Form.Group>

            <Form.Group controlId="catalogDetailImage2" className='mt-3'>
              <Form.Label>Catalog Detail Image 2</Form.Label>
              <Controller
                name="catalogDetailImage2"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="file"
                    accept="image/*"
                    style={{ fontSize: "13px" }}
                  />
                )}
              />
            </Form.Group>

            <Form.Group controlId="catalogDetailImage3" className='mt-3'>
              <Form.Label>Catalog Detail Image 3</Form.Label>
              <Controller
                name="catalogDetailImage3"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="file"
                    accept="image/*"
                    style={{ fontSize: "13px" }}
                  />
                )}
              />
            </Form.Group>

            <Form.Group controlId="catalogPDF" className='mt-4'>
              <Form.Label>Catalog PDF</Form.Label>
              <Controller
                name="catalogPDF"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="file"
                    accept=".pdf"
                    style={{ fontSize: "13px" }}
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

export default AddCatalogModal;
