import React, { useState,useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function SiteViewConfigModal({ variant, isUpdate }) {
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
        {isUpdate ? <FontAwesomeIcon icon={faEdit} /> : 'Add New Content'}
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: "17px" }}>{isUpdate ? 'Update Content' : 'Add New Content'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="pageName">
                            <Form.Label>Page Name</Form.Label>
                            <Controller
                                name="pageName"
                                control={control}
                                rules={{ required: "Page Name is required" }}
                                render={({ field }) => (
                                    <Form.Select
                                        {...field}
                                        aria-label="Page Name"
                                        
                                        isInvalid={!!errors.pageName}
                                    >
                                        <option>Select</option>
                                        <option>Model 1</option>
                                        <option>Model 2</option>
                                        <option>Model 3</option>
                                    </Form.Select>
                                )}
                            />
                            {errors.pageName && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.pageName.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="contentName" className="mt-3">
                            <Form.Label>Content Name</Form.Label>
                            <Controller
                                name="contentName"
                                control={control}
                                rules={{ required: "Content Name is required" }}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="text"
                                        placeholder="Content Name"
                                        
                                        isInvalid={!!errors.contentName}
                                    />
                                )}
                            />
                            {errors.contentName && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.contentName.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="contentTitle" className="mt-3">
                            <Form.Label>Content Title</Form.Label>
                            <Controller
                                name="contentTitle"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="text"
                                        placeholder="Content Title"
                                        
                                    />
                                )}
                            />
                        </Form.Group>

                        <Form.Group controlId="contentDescription" className="mt-3">
                            <Form.Label>Content Description</Form.Label>
                            <Controller
                                name="contentDescription"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        as="textarea"
                                        rows={5}
                                        placeholder="Content Description"
                                        
                                    />
                                )}
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content Subtitle 1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Content Subtitle 1"
                                autoFocus
                                
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content Subtitle Description 1</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={5}
                                placeholder="Content Subtitle Description 1"
                                autoFocus
                                
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content SubImage 1</Form.Label>
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content Subtitle 2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Content Subtitle 2"
                                autoFocus
                                
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content Subtitle Description 2</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={5}
                                placeholder="Content Subtitle Description 2"
                                autoFocus
                                
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content SubImage 2</Form.Label>
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content Subtitle 3</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Content Subtitle 3"
                                autoFocus
                                
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content Subtitle Description 3</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={5}
                                placeholder="Content Subtitle Description 3"
                                autoFocus
                                
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content SubImage 3</Form.Label>
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content Subtitle 4</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Content Subtitle 4"
                                autoFocus
                                
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content Subtitle Description 4</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={5}
                                placeholder="Content Subtitle Description 4"
                                autoFocus
                                
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content SubImage 4</Form.Label>
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content Video Link</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                placeholder="Content Video Link"
                                autoFocus
                                
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content Button Link</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={2}
                                placeholder="Content Button Link"
                                autoFocus
                                
                            />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Content Image</Form.Label>
                            <Form.Control type="file" accept="image/*" />
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
    )
}

export default SiteViewConfigModal;
