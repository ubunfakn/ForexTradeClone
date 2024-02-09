import React, { useState } from 'react';
import '../CSS/Signup.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [formData, setFormData] = useState({});
  const navigation = useNavigate();

  const handleHalfValidation = () => {
    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return false;
    }
    return true;
  };
  const sendOtp = () => {
    if (handleHalfValidation()) {
      fetch("http://localhost:8080/generate_otp", {
        method: "POST",
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((result) => {
          setShowOtpBox(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleOtp = () => {
    if (otp.length() < 4) return false;
    return true;
  }

  const verifyOtp = () => {
    if (handleOtp()) {
      fetch("http://localhost:8080/verify_otp", {
        method: "POST",
        body: JSON.stringify({ otp }),
      })
        .then((response) => response.json())
        .then((result) => {
          setFormData({ ...formData, email: email });
          setIsOtpVerified(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  const handleFullValidation = () => {
    if(referralCode.length < 8)return false;
    if(name.length < 5)return false;
    if(password < 8)return false;
    if(password !== confirmPassword) return false;
    if(countryCode == '' || countryCode == undefined)return false;
    if(mobileNumber == '' || undefined)return false;
    if(!isChecked)return false;
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = countryCode+mobileNumber;
    setFormData({...formData, userName:name, referralCode:referralCode,password:password,mobile:phoneNumber})
    if(handleFullValidation()){
      fetch("http://localhost:8080/signup", {
        method: "POST",
        body: JSON.stringify({ formData }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          navigation("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className='signup_container'>
      <div className='signup_card p-4 mt-5 mb-5 d-flex flex-column justify-content-center align-items-center'>
        <img src={logo} alt="" width={400} height={80} style={{ marginLeft: "1vw" }} />
        <h3 className='text-white mt-5'>Create an Account</h3>
        <div className="form" style={{ width: "100%", paddingTop: "40px" }}>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="number"
              placeholder="Referral Code"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
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

            <div className="name_container d-flex mt-5">
              <input
                required
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            </div>
            <div className="d-flex mt-5">
              <input
                required
                type="email"
                placeholder="Email"
                readOnly={showOtpBox ? true : false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '90%',
                  padding: '10px',
                  border: '2px solid grey',
                  borderRadius: '10px',
                  color: 'black',
                  paddingLeft: "15px",
                  height: "100%",
                  fontSize: "0.9vw"
                }}
              />
              {!isOtpVerified && <button
                onClick={() => sendOtp()}
                className="btn btn-outline-success"
                style={{ marginLeft: "2%", borderRadius: "15px" }}>{showOtpBox ? "Resend" : "Send Otp"}</button>}
            </div>
            {showOtpBox && (
              <div className="d-flex mt-5 otp_container">
                <input
                  required
                  className=''
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  type="number"
                  readOnly={isOtpVerified}
                  placeholder="Enter 4 digit OTP"
                  style={{
                    width: '90%',
                    padding: '10px',
                    border: '2px solid grey',
                    borderRadius: '10px',
                    color: 'black',
                    paddingLeft: "15px",
                    height: "100%",
                    fontSize: "0.9vw"
                  }} />
                {!isOtpVerified && <button
                  className="btn btn-outline-success"
                  onClick={() => verifyOtp()}
                  style={{ marginLeft: "2%", borderRadius: "15px" }}>Verify</button>}
              </div>
            )}
            <div className="password_container d-flex mt-5">
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                style={{
                  width: '49%',
                  padding: '10px',
                  border: '2px solid grey',
                  borderRadius: '10px',
                  color: 'black',
                  paddingLeft: "15px",
                  height: "100%",
                  fontSize: "0.9vw"
                }}
              />
              <input
                required
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                style={{
                  width: '49%',
                  padding: '10px',
                  border: '2px solid grey',
                  borderRadius: '10px',
                  color: 'black',
                  paddingLeft: "15px",
                  height: "100%",
                  fontSize: "0.9vw",
                  marginLeft: "2%"
                }}
              />
            </div>

            <div className="mobile_container d-flex mt-5">
              <input
                required
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                type="number"
                placeholder="Country Code"
                style={{
                  width: '29%',
                  padding: '10px',
                  border: '2px solid grey',
                  borderRadius: '10px',
                  color: 'black',
                  paddingLeft: "15px",
                  height: "100%",
                  fontSize: "0.9vw"
                }}
              />
              <input
                required
                type="number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Mobile Number"
                style={{
                  width: '69%',
                  padding: '10px',
                  border: '2px solid grey',
                  borderRadius: '10px',
                  color: 'black',
                  paddingLeft: "15px",
                  height: "100%",
                  fontSize: "0.9vw",
                  marginLeft: "2%"
                }}
              />
            </div>
            <div className="checkbox_container d-flex mt-4">
              <input value={isChecked} onChange={()=>setIsChecked(!isChecked)} required type="checkbox" />
              <p className='mt-3 p-1 text-white'>I agree to Terms and Conditions</p>
            </div>
            <button type='submit' className='btn btn-block' style={{ backgroundColor: "black", color: "#16AD4B", fontWeight: "bold" }}>Sign Up</button>
          </form>
        </div>
        <div className='d-flex mt-4'>
          <h5 className="text-secondary">Already have an account?</h5>
          <Link className='ml-2' to={"/login"}><h5>Sign in</h5></Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
