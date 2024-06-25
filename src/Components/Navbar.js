import React, { useState } from 'react'
import '../CSS/Navbar.css'
import logo from '../assets/logo-dark.png'

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div id='navbar' className='d-flex justify-content-between' style={{ width: "100vw", zIndex:"1000", backgroundColor:"#e5e9f2", height:"70px" }}>      
      <div className="hello_section mt-3 ml-5 mb-4" style={{ width: "200px" }}>
        {/* <h6><strong>Hello Ankit Nashine,</strong></h6> */}
        <img src={logo} alt="Logo" style={{ width: "150px", height: "30px" }} />
        {/* <h6 style={{ fontSize: '12px', marginTop: "-3px" }}>Welcome to FOREXGROW Trader</h6> */}
      </div>

      <div className=" d-flex" style={{ paddingRight: "10px", marginRight:"2vw", alignItems: "center" }}>
          <div id="profile_section" className='d-flex  align-items-center'>
          <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2px", width: "35px", height: "35px", borderRadius: "75px", backgroundColor: "#16AD4B", marginLeft: "10px" }}>
            <i className="fa-solid fa-user" style={{ fontSize: "20px" }}></i>
          </div>
          <div id='profile_text' className='' style={{ marginLeft: "10px" }}>
            <h6 style={{ fontSize: "10px"}}><strong>Ankit Nashine</strong></h6>
            {/* <h6 style={{marginTop:"-5px", fontSize:"8px"}}>{"ankit2003nashine@gmail.com".slice(0,20)}...</h6> */}
          </div>
        </div>
      </div>

    </div>
  )
}
