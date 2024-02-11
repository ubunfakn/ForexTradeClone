import React, { useState } from 'react';
import '../CSS/Login.css';
import logo from '../assets/FX_grow_logo_new.png';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigate();

  const [errors, setErrors] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = () => {
    // Destructure email from formData
    const { email } = formData;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Use the test method on the regex
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigation("/dashboard")

    // Perform client-side validation
    if (!formData.email) {
      setErrors('Email is required');
      return;
    }
    if (!isValidEmail()) {
      setErrors('Please input a valid email');
      return;
    }
    if (!formData.password) {
      setErrors('Password is required');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response accordingly
      if (response.ok) {
        // Successful login, redirect or perform other actions
        console.log('Login successful');
      } else {
        // Handle unsuccessful login
        console.error('Login failed');
        setErrors('Login failed')
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrors('Error during login: ', error)
    }
  };

  return (
    <div className='signup_container'>
      <div className='login_card p-4 mt-5 mb-5 d-flex flex-column justify-content-center align-items-center'>
        <img src={logo} alt="" style={{ width: "12vw", height: "3vw" }} className='mt-5' />
        <h1 className='mt-5'>Welcome,</h1>
        <h3 className='text-secondary'>Log in to continue!</h3>
        <div className="form" style={{ width: "100%", paddingTop: "40px" }}>
          <form onSubmit={handleSubmit}>
            {errors && (
              <Alert variant="danger" dismissible >
                <h6>{errors}</h6>
              </Alert>
            )}
            <input
              type="email"
              name="email"
              className='mt-3'
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '20px',
                border: '2px solid lightgray',
                borderRadius: '120px',
                color: 'black',
                paddingLeft: "15px",
                height: "100%",
                fontSize: "0.9vw"
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className='mt-5'
              style={{
                width: '100%',
                padding: '20px',
                border: '2px solid lightgray',
                borderRadius: '120px',
                color: 'black',
                paddingLeft: "15px",
                height: "100%",
                fontSize: "0.9vw",
              }}
            />
            <div className="d-flex" style={{ justifyContent: "flex-end" }}>
              <Link style={{ color: "#4169E1", marginTop: "15px" }}><h6>Forgot password?</h6></Link>
            </div>
            <button type='submit' className='btn btn-block mt-5 p-2' style={{ backgroundColor: "#4169E1", color: "white", fontWeight: "bold", borderRadius: "80px" }}><h5 className='mt-1'>Login</h5></button>
          </form>
        </div>
        <div className='d-flex mt-4 mb-4'>
          <h5 className="text-secondary">Don't have an account?</h5>
          <Link className='ml-2' to={"/ForexTradeClone"}><h5>Sign up</h5></Link>
        </div>
      </div>
    </div>
  );
}
