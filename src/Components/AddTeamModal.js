import React, { useState,useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function AddTeamModal({ variant, isUpdate }) {
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

  // return (
  //   <>
  //     <Button variant="primary" onClick={handleShow}>
  //       Add Team Member
  //     </Button>

  //     <Modal show={show} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title style={{ fontSize: "17px" }}>Add New Team Member</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <Form onSubmit={handleSubmit(onSubmit)}>
  //           <Form.Group controlId="teamMemberName">
  //             <Form.Label>Team Member Name</Form.Label>
  //             <Controller
  //               name="teamMemberName"
  //               control={control}
  //               rules={{ required: "Team Member Name is required" }}
  //               render={({ field }) => (
  //                 <Form.Control
  //                   {...field}
  //                   type="text"
  //                   placeholder="Team Member Name"
  //                   autoFocus
                    
  //                   isInvalid={!!errors.teamMemberName}
  //                 />
  //               )}
  //             />
  //             {errors.teamMemberName && (
  //               <Form.Control.Feedback type="invalid">
  //                 {errors.teamMemberName.message}
  //               </Form.Control.Feedback>
  //             )}
  //           </Form.Group>

  //           <Form.Group controlId="teamMemberDesignation" className="mt-3">
  //             <Form.Label>Team Member Designation</Form.Label>
  //             <Controller
  //               name="teamMemberDesignation"
  //               control={control}
  //               rules={{ required: "Team Member Designation is required" }}
  //               render={({ field }) => (
  //                 <Form.Control
  //                   {...field}
  //                   type="text"
  //                   placeholder="Team Member Designation"
                    
  //                   isInvalid={!!errors.teamMemberDesignation}
  //                 />
  //               )}
  //             />
  //             {errors.teamMemberDesignation && (
  //               <Form.Control.Feedback type="invalid">
  //                 {errors.teamMemberDesignation.message}
  //               </Form.Control.Feedback>
  //             )}
  //           </Form.Group>

  //           <Form.Group controlId="teamMemberAbout" className="mt-3">
  //             <Form.Label>Team Member About</Form.Label>
  //             <Controller
  //               name="teamMemberAbout"
  //               control={control}
  //               // rules={{ required: "Team Member About is required" }}
  //               render={({ field }) => (
  //                 <Form.Control
  //                   {...field}
  //                   as="textarea"
  //                   placeholder="Team Member About"
  //                   // isInvalid={!!errors.teamMemberAbout}
  //                 />
  //               )}
  //             />
  //             {/* {errors.teamMemberAbout && (
  //               <Form.Control.Feedback type="invalid">
  //                 {errors.teamMemberAbout.message}
  //               </Form.Control.Feedback>
  //             )} */}
  //           </Form.Group>

  //           <Form.Group controlId="teamMemberImage" className="mt-3">
  //             <Form.Label>Team Member Image</Form.Label>
  //             <Controller
  //               name="teamMemberImage"
  //               control={control}
  //               render={({ field }) => (
  //                 <Form.Control
  //                   {...field}
  //                   type="file"
  //                   accept="image/*"
                    
  //                 />
  //               )}
  //             />
  //           </Form.Group>

  //           <Button variant="secondary" className='mt-4' onClick={handleClose}>
  //             Close
  //           </Button>
  //           <Button variant="primary" type="submit" className="mt-4 ml-2">
  //             Submit
  //           </Button>
  //         </Form>
  //       </Modal.Body>
  //     </Modal>
  //   </>
  // );

  return (
    <>
        <Button variant={variant} onClick={handleShow}>
        {isUpdate ? <FontAwesomeIcon icon={faEdit} /> : 'Add Team Member'}
      </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: "17px" }}>{isUpdate ? 'Update Team Member' : 'Add New Team Member'}</Modal.Title>
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
                    <Button disabled={loading} variant="primary" className='mt-4 ml-2' type="submit">
              {!loading?"Submit":"Saving"}
            </Button>
                </Form>
            </Modal.Body>
        </Modal>
    </>
);
}

export default AddTeamModal;
