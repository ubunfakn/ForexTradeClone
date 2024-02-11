import React, { useState } from 'react';
import '../CSS/Signup.css';
import logo from '../assets/FX_grow_logo_new.png';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [showCountries, setShowCountries] = useState(false);
  const [userNameOfParent, setUsernameOfParent] = useState(null);
  const [showAdditionalDiv, setShowAdditionalDiv] = useState(false);
  const [firstDigit, setFirstDigit] = useState(undefined);
  const [secondDigit, setSecondDigit] = useState(undefined);
  const [thirdDigit, setThirdDigit] = useState(undefined);
  const [fourthDigit, setFourthDigit] = useState(undefined);
  const [error, setError] = useState(null);
  const navigation = useNavigate();
  const countries = [
    { label: 'Afghanistan', value: '+93', flag: '🇦🇫' },
    { label: 'Australia', value: '+61', flag: '🇦🇺' },
    { label: 'Bangladesh', value: '+880', flag: '🇧🇩' },
    { label: 'Bhutan', value: '+975', flag: '🇧🇹' },
    { label: 'Canada', value: '+1', flag: '🇨🇦' },
    { label: 'China', value: '+86', flag: '🇨🇳' },
    { label: 'France', value: '+33', flag: '🇫🇷' },
    { label: 'Germany', value: '+49', flag: '🇩🇪' },
    { label: 'India', value: '+91', flag: '🇮🇳' },
    { label: 'Indonesia', value: '+62', flag: '🇮🇩' },
    { label: 'Iran', value: '+98', flag: '🇮🇷' },
    { label: 'Iraq', value: '+964', flag: '🇮🇶' },
    { label: 'Italy', value: '+39', flag: '🇮🇹' },
    { label: 'Japan', value: '+81', flag: '🇯🇵' },
    { label: 'Malaysia', value: '+60', flag: '🇲🇾' },
    { label: 'Myanmar', value: '+95', flag: '🇲🇲' },
    { label: 'Nepal', value: '+977', flag: '🇳🇵' },
    { label: 'Netherlands', value: '+31', flag: '🇳🇱' },
    { label: 'Pakistan', value: '+92', flag: '🇵🇰' },
    { label: 'Philippines', value: '+63', flag: '🇵🇭' },
    { label: 'Saudi Arabia', value: '+966', flag: '🇸🇦' },
    { label: 'Singapore', value: '+65', flag: '🇸🇬' },
    { label: 'South Korea', value: '+82', flag: '🇰🇷' },
    { label: 'Spain', value: '+34', flag: '🇪🇸' },
    { label: 'Sri Lanka', value: '+94', flag: '🇱🇰' },
    { label: 'Switzerland', value: '+41', flag: '🇨🇭' },
    { label: 'Thailand', value: '+66', flag: '🇹🇭' },
    { label: 'United Kingdom', value: '+44', flag: '🇬🇧' },
    { label: 'United States', value: '+1', flag: '🇺🇸' },
    { label: 'Vietnam', value: '+84', flag: '🇻🇳' },
  ];

  const toastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };


  const togglePasswordVisibility = (inputType) => {
    if (inputType === 'password') {
      setShowPassword(!showPassword);
    } else if (inputType === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleCountryChange = (selectedOption) => {
    setCountryCode(selectedOption.value)
    setShowCountries(!showCountries)
    setSelectedCountry(selectedOption.label + " " + selectedOption.value)
  };

  const handleHalfValidation = () => {
    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return false;
    }
    if(userNameOfParent == null){
      setError("Sponsoror not found")
      return false;
    }
    return true;
  };

  const sendOtp = () => {
    if (handleFullValidation() && handleHalfValidation()) {
      fetch("http://localhost:8080/api/generate_otp", {
        method: "POST",
        body: JSON.stringify({ email }),
      })
        .then((response) => {
          setShowAdditionalDiv(true)
          response.ok ? toast.success("Otp sent to your registered email id", toastOptions) : toast.error("Failed to send otp", toastOptions)
        }).catch((error)=>{
          setError("Failed to send otp");
        })

    }
  };

  const handleOtp = () => {
    const newOtp = `${firstDigit} ${secondDigit} ${thirdDigit} ${fourthDigit}`;
    if (newOtp.length < 4) return false;
    return true;
  }

  const verifyOtp = () => {
    if (handleOtp()) {
      fetch("http://localhost:8080/api/verify_otp", {
        method: "POST",
        body: JSON.stringify({ otp }),
      })
        .then((response) => response.json())
        .then((result) => {
          setFormData({ ...formData, email: email });
          setIsOtpVerified(true);
          sendDataToServer()
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  const handleFullValidation = () => {
    if (referralCode.length < 8) {
      setError('Enter atleast 8 digit referal code')
      return false;
    }
    if (name.length < 5) {
      setError('Name must contain 5 characters')
      return false;
    }
    if (password < 8) {
      setError('Password must contain 8 characters')
      return false;
    }
    if (password !== confirmPassword) {
      setError('Password and Confirm Password must be same')
      return false;
    }
    if (countryCode == '' || countryCode == undefined) {
      setError('Country code connot be empty')
      return false;
    }
    if (mobileNumber == '' || undefined) {
      setError('Enter valid mobile number')
      return false;
    }
    if (!isChecked) {
      setError('Please agree to terms and conditions')
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOtp();
  }

  const sendDataToServer = () => {
    const phoneNumber = countryCode + mobileNumber;
    setFormData({ ...formData, userName: name, referralCode: referralCode, password: password, mobile: phoneNumber })
    fetch("http://localhost:8080/api/signup", {
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

  const handleReferal = (e)=>{
    const referralCodeNew = e.target.value;
    setReferralCode(referralCodeNew);
    if(referralCode.length == 7){
      fetch(`http://localhost:8080/api/getUser?referalCode=${referralCodeNew}`).then((response)=>{
        response.json((result)=>{
          setUsernameOfParent(result.username);
        }).catch(()=>{
          setUsernameOfParent("Failed to fetch Sponseror");
        })
      }).catch((error)=>{
        setUsernameOfParent("User not found with given referal code");
      })
    }else{
      setUsernameOfParent(null)
    }
  }

  return (
    <div className='signup_container'>
      <div className='signup_card p-4 mt-5 mb-5 d-flex flex-column justify-content-center align-items-center'>
        <img src={logo} alt="" style={{ width: "12vw", height: "3vw" }} className='mt-5' />
        <h3 className='mt-4' style={{ color: "gray" }}>Create an Account</h3>
        <div className="form" style={{ width: "100%", paddingTop: "40px" }}>
          {error && (
            <Alert variant="danger" dismissible >
              <h6>{error}</h6>
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Referral Code*"
              value={referralCode}
              onChange={(e) => handleReferal(e)}
              style={{
                width: '100%',
                padding: '20px',
                border: '2px solid lightgray',
                borderRadius: '80px',
                color: 'black',
                paddingLeft: "15px",
                height: "100%",
                fontSize: "0.9vw"
              }}
            />
            <p className='text-primary ml-3 mt-1'>{userNameOfParent}</p>

            <div className="name_container d-flex mt-5">
              <input
                
                type="text"
                placeholder="Full Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '20px',
                  border: '2px solid lightgray',
                  borderRadius: '80px',
                  color: 'black',
                  paddingLeft: "15px",
                  height: "100%",
                  fontSize: "0.9vw"
                }}
              />
            </div>
            <div className="d-flex mt-5">
              <input
                
                type="email"
                placeholder="Email*"
                readOnly={showOtpBox ? true : false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '20px',
                  border: '2px solid lightgray',
                  borderRadius: '80px',
                  color: 'black',
                  paddingLeft: "15px",
                  height: "100%",
                  fontSize: "0.9vw"
                }}
              />
            </div>
            <div className="password_container d-flex mt-5">
              <div style={{ position: 'relative', width: '49%' }}>
                <input
                  
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password*"
                  style={{
                    width: '100%',
                    padding: '20px',
                    border: '2px solid lightgray',
                    borderRadius: '80px',
                    color: 'black',
                    paddingLeft: '15px',
                    height: '100%',
                    fontSize: '0.9vw',
                  }}
                />
                <i
                  className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                  }}
                  onClick={() => togglePasswordVisibility('password')}
                />
              </div>
              <div style={{ position: 'relative', width: '49%', marginLeft: '2%' }}>
                <input
                  
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password*"
                  style={{
                    width: '100%',
                    padding: '20px',
                    border: '2px solid lightgray',
                    borderRadius: '80px',
                    color: 'black',
                    paddingLeft: '15px',
                    height: '100%',
                    fontSize: '0.9vw',
                  }}
                />
                <i
                  className={`fa ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                  }}
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                />
              </div>
            </div>

            <div className="mobile_container d-flex mt-5">
              <div onClick={() => setShowCountries(!showCountries)}
                className="d-flex"
                style={{
                  border: '2px solid lightgray',
                  padding: '17px',
                  color: 'gray',
                  height: '100%',
                  fontSize: '0.8vw',
                  width: '29%',
                  justifyContent: 'space-between', // Aligns items along the main axis with space between
                  alignItems: 'center', // Aligns items along the cross axis at the center
                }}
              >
                {selectedCountry}
                <div className="" style={{ cursor: "pointer" }}>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
              {showCountries && <div
                style={{
                  border: '2px solid lightgray',
                  color: 'gray',
                  height: 'auto',
                  position: 'fixed',
                  fontSize: '0.8vw',
                  width: '11%',
                  maxWidth: '11%',
                  marginTop: '65px',
                  zIndex: '1',
                  backgroundColor: 'white',
                  padding: '11px',
                  maxHeight: '220px',
                  overflowY: 'auto',  // Add overflow property for vertical scrolling
                }}
              >
                {countries.map((country, index) => (
                  <h5 onClick={() => handleCountryChange(country)} className='d-flex' key={index} style={{ paddingLeft: '10px', cursor: "pointer" }}>{country.flag}&nbsp; <p style={{ fontSize: "0.8vw" }}>{"(" + country.value + ")"}</p></h5>
                ))}
              </div>}


              <input
                
                type="number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Mobile Number*"
                style={{
                  width: '69%',
                  padding: '20px',
                  border: '2px solid lightgray',
                  borderRadius: '80px',
                  color: 'black',
                  paddingLeft: "15px",
                  height: "100%",
                  fontSize: "0.9vw",
                  marginLeft: "2%"
                }}
              />
            </div>
            <div className="checkbox_container d-flex mt-2">
              <input value={isChecked} onChange={() => setIsChecked(!isChecked)} type="checkbox" />
              <p className='mt-3 p-1'>I agree to Terms and Conditions</p>
            </div>
            <button type='submit' className='btn btn-block mt-2 p-2' style={{ backgroundColor: "#4169E1", color: "white", fontWeight: "bold", borderRadius: "80px" }}><h5 className='mt-1'>Sign Up</h5></button>
          </form>
        </div>
        <div className='d-flex mt-4 mb-4'>
          <h5 className="text-secondary">Already have an account?</h5>
          <Link className='ml-2' to={"/login"}><h5>Sign in</h5></Link>
        </div>
      </div>
      {showAdditionalDiv && <div className={`overlay5 ${showAdditionalDiv ? 'hidden' : ''}`} onClick={() => setShowAdditionalDiv(true)}>
        {/* Linear gradient effect for overlay */}
        <div className="d-flex" style={{ marginTop: "1vh" }}>
          <div className="bg-white card d-flex" style={{ height: "auto", width: "30vw", justifyContent: "center", alignItems: "center" }}>
            <h2 className='mt-5'><strong>Verify</strong></h2>
            <h5 className='mt-3'>Your code was sent to you via email</h5>
            <div className="mt-4 d-flex justify-content-center">
              <input value={firstDigit} onChange={(e) => setFirstDigit(e.target.value)} type="number" style={{ height: "5vh", width: "10%", border: "2px solid lightgray", borderRadius: "15px", fontSize: "1vw", textAlign: "center" }} />
              <input value={secondDigit} onChange={(e) => setSecondDigit(e.target.value)} type="number" style={{ height: "5vh", width: "10%", border: "2px solid lightgray", borderRadius: "15px", fontSize: "1vw", textAlign: "center", marginLeft: "5%" }} />
              <input value={thirdDigit} onChange={(e) => setThirdDigit(e.target.value)} type="number" style={{ height: "5vh", width: "10%", border: "2px solid lightgray", borderRadius: "15px", fontSize: "1vw", textAlign: "center", marginLeft: "5%" }} />
              <input value={fourthDigit} onChange={(e) => setFourthDigit(e.target.value)} type="number" style={{ height: "5vh", width: "10%", border: "2px solid lightgray", borderRadius: "15px", fontSize: "1vw", textAlign: "center", marginLeft: "5%" }} />
            </div>
            <button className="btn btn-lg bg-primary mt-5 text-white" style={{ borderRadius: "10px" }} onClick={() => verifyOtp()}>Verify</button>
            <h6 onClick={() => sendOtp()} className='mt-4 mb-4' style={{ color: "darkblue", cursor: "pointer" }}>Resend Otp?</h6>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default SignUp;
