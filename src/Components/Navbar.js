import React, { useState } from 'react'
import '../CSS/Navbar.css'

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div id='navbar' className='d-flex bg-white' style={{ width: "calc(100% - 280px)", marginLeft: "280px" }}>
      <div className="hello_section mt-3 ml-5" style={{ width: "200px" }}>
        <h5><strong>Hello Ankit Nashine,</strong></h5>
        <h6 style={{ fontSize: '12px', marginTop: "-3px" }}>Welcome to FOREXGROW Trader</h6>
      </div>

      <div className="right_nav_section d-flex" style={{ position: "fixed", right: 30, paddingRight: "10px", width: "400px", alignItems: "center", marginTop:"15px" }}>
        <div className="language_section d-flex" style={{ backgroundColor: "lightgray", width: "150px", height: "35px", borderRadius: "3vw" }}>
          <div className='mt-1 ml-2' style={{ width: "28px", height: "28px", borderRadius: "30px", backgroundColor: "white" }}>
            <i className="fa-solid fa-language ml-1 mt-2"></i>
          </div>
          <select
            id="languageSelect"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            style={{ border: 'none', outline: 'none', padding: '1px', borderRadius: '5px', paddingLeft: "10px", backgroundColor: "lightgray", width: "100px", height: "30px" }}
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="chinese">Chinese</option>
            <option value="malay">Malay</option>
            <option value="russian">Russian</option>
            <option value="thai">Thai</option>
          </select>
        </div>
        <div id="notification" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2px", width: "35px", height: "35px", borderRadius: "75px", backgroundColor: "lightgray", marginLeft: "20px" }}>
          <i className="fa-solid fa-bell" style={{ fontSize: "20px" }}></i>
        </div>
        <div id="divide" style={{ width: "2px", height: "35px", backgroundColor: "lightgray", marginLeft: "10px" }}></div>
        <div id="profile_section" className='d-flex justify-content-center align-items-center'>
          <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2px", width: "35px", height: "35px", borderRadius: "75px", backgroundColor: "#16AD4B", marginLeft: "10px" }}>
            <i className="fa-solid fa-user" style={{ fontSize: "20px" }}></i>
          </div>
          <div id='profile_text' className='' style={{ marginLeft: "10px" }}>
            <h6 style={{ fontSize: "15px"}}><strong>Ankit Nashine</strong></h6>
            <h6 style={{marginTop:"-5px", fontSize:"12px"}}>ankit2003nashine...</h6>
          </div>
        </div>
      </div>

    </div>
  )
}
