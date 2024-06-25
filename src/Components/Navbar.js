import React, { useState } from 'react'
import '../CSS/Navbar.css'
import logo from '../assets/logo-dark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDesktop, faPowerOff, faScrewdriver } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isFullScreen, setIsFullScreen] = useState(false); // State to track full screen mode

  const handleFullScreenToggle = () => {
      if (!isFullScreen) {
          // Enter full screen
          if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
              document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
              document.documentElement.webkitRequestFullscreen();
          } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
              document.documentElement.msRequestFullscreen();
          }
      } else {
          // Exit full screen
          if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.mozCancelFullScreen) { /* Firefox */
              document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
              document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE/Edge */
              document.msExitFullscreen();
          }
      }
      setIsFullScreen(!isFullScreen); // Toggle full screen state
  };
  return (
    <div id='navbar' className='d-flex justify-content-between' style={{ width: "100vw", zIndex: "1000", backgroundColor: "#e5e9f2", height: "70px" }}>
      <div className="hello_section mt-3 ml-5 mb-4" style={{ width: "200px" }}>
        {/* <h6><strong>Hello Ankit Nashine,</strong></h6> */}
        <img src={logo} alt="Logo" style={{ width: "150px", height: "30px" }} />
        {/* <h6 style={{ fontSize: '12px', marginTop: "-3px" }}>Welcome to FOREXGROW Trader</h6> */}
      </div>

      <div className=" d-flex" style={{ paddingRight: "10px", marginRight: "2vw", alignItems: "center" }}>
        <FontAwesomeIcon onClick={handleFullScreenToggle} id='full_screen_icon' style={{ fontSize: "13px", marginLeft: "20px", marginTop: "-5px", cursor: "pointer", marginRight: "15px" }} icon={faDesktop} />
        <div id="profile_section" className='d-flex  align-items-center'>
          <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2px", width: "35px", height: "35px", borderRadius: "75px", backgroundColor: "#16AD4B", marginLeft: "10px" }}>
            <i className="fa-solid fa-user" style={{ fontSize: "20px" }}></i>
          </div>
          <div id='profile_text' className='' style={{ marginLeft: "10px" }}>
            <h6 style={{ fontSize: "10px" }}><strong>Ankit Nashine</strong></h6>
            {/* <h6 style={{marginTop:"-5px", fontSize:"8px"}}>{"ankit2003nashine@gmail.com".slice(0,20)}...</h6> */}
          </div>
        </div>
        <FontAwesomeIcon id='logout_icon' style={{ fontSize: "13px", marginLeft: "20px", marginTop: "-5px", cursor: "pointer" }} icon={faPowerOff} />
      </div>

    </div>
  )
}
