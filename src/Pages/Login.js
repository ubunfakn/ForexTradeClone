import React, { useState } from 'react';
import '../CSS/Login.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
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
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!isValidEmail()) newErrors.email = 'Please input a valid email';
    if (!formData.password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, make a POST request to the backend
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
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='signup_container'>
      <div className='login_card p-4 mt-5 mb-5 d-flex flex-column justify-content-center align-items-center'>
        <img src={logo} alt="" width={400} height={80} style={{ marginLeft: "1vw" }} />
        <h2 className='mt-5'>Welcome,</h2>
        <h4 className='text-secondary'>Log in to continue!</h4>
        <div className="form" style={{ width: "100%", paddingTop: "40px" }}>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid grey',
                borderRadius: '10px',
                color: 'black',
                paddingLeft: "15px",
                height: "100%",
                fontSize: "0.9vw"
              }}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : 'mt-4'}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid grey',
                borderRadius: '10px',
                color: 'black',
                paddingLeft: "15px",
                height: "100%",
                fontSize: "0.9vw"
              }}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
            <button type='submit' className='btn btn-block mt-4' style={{ backgroundColor: "black", color: "#16AD4B", fontWeight: "bold" }}>Sign In</button>
          </form>
        </div>
        <div className='d-flex mt-4'>
          <h5 className="text-secondary">Don't have an account?</h5>
          <Link className='ml-2' to={"/ForexTradeClone"}><h5>Sign up</h5></Link>
        </div>
      </div>
    </div>
  );
}
