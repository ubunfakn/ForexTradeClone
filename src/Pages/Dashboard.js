import React, { useEffect, useRef } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import lightBgImage from '../assets/light_background.jpg';
import rewardImage from '../assets/reward.png';
import graph from '../assets/graph.png';
import '../CSS/Dashboard.css';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();

  useEffect(() => {
    // Add the class to trigger the animation after the component is mounted
    // cardRef1.current.classList.add('show');
    // cardRef2.current.classList.add('show');
    // cardRef3.current.classList.add('show');
  }, []);
  return (
    //linear-gradient(to top, #8e2de2, #4a00e0), //linear-gradient(to top, #00c6fb, #005bea), //linear-gradient(to top, #fbc2eb, #a6c1ee), //
    <div style={{ display: "flex", flexDirection: "column", minHeight:"100vh", background: "#fff" }}>
    <Sidebar />
    <Navbar />
    <div id="dashboard_section" style={{ width: "calc(100% - 280px)", marginLeft: "250px", marginTop: "80px", zIndex: "1", position: "relative", display: 'flex', flexDirection: 'column' }}>
        <div id="top_section_dashboard" className='d-flex' style={{ marginTop: "1px" }}>
            {/* Content on the left */}
            <div style={{ marginLeft: "50px", flex: 1 }}>
                {/* <h3><strong>Dashboard</strong></h3> */}
                <div className="d-flex mt-1 text-dark">
                    <i className="fa-solid fa-house mt-1"></i>
                    <h5 className='ml-2'>Dashboard</h5>
                </div>
            </div>
        </div>
        <div id="top_cards" className='d-flex' style={{ marginTop: "10px", marginLeft:"2vw" }}>
            <div className="cards animated fadeInUp" style={{paddingTop:"5px", paddingBottom:"5px",marginLeft: "5vw", width: "15vw",  backgroundColor: "white", marginTop: "2vh", border: "2px solid gray", borderRadius: "20px", boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.4)"}}>
                <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
                    <i className="fa-solid fa-list" style={{ fontSize: "1.4vw" }}></i>
                </div>
                <h5 style={{ fontSize: "1vw", marginTop: "1vh", marginLeft: "1vw" }}>Total Category</h5>
                <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>10</h5>
            </div>

            <div className="cards animated fadeInUp" style={{ paddingTop:"5px", paddingBottom:"5px",marginLeft: "3vw", width: "15vw",  backgroundColor: "white", marginTop: "2vh", border: "2px solid gray", borderRadius: "20px", boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.4)" }}>
                <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
                    <i className="fa-solid fa-shuffle" style={{ fontSize: "1.4vw" }}></i>
                </div>
                <h5 style={{ fontSize: "1vw", marginTop: "1vh", marginLeft: "1vw" }}>Total Models</h5>
                <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>10</h5>
            </div>

            <div className="cards animated fadeInUp" style={{paddingTop:"5px", paddingBottom:"5px",marginLeft: "3vw", width: "15vw",  backgroundColor: "white", marginTop: "2vh", border: "2px solid gray", borderRadius: "20px", boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.4)" }}>
                <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
                    <i className="fa-solid fa-quote-left" style={{ fontSize: "1.4vw" }}></i>
                </div>
                <h5 style={{ fontSize: "1vw", marginTop: "1vh", marginLeft: "1vw" }}>Testimonials</h5>
                <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>10</h5>
            </div>

            <div className="cards animated fadeInUp" style={{paddingTop:"5px", paddingBottom:"5px",marginLeft: "3vw", width: "15vw", backgroundColor: "white", marginTop: "2vh", border: "2px solid gray", borderRadius: "20px", boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.4)" }}>
                <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
                    <i className="fa-solid fa-users" style={{ fontSize: "1.4vw" }}></i>
                </div>
                <h5 style={{ fontSize: "1vw", marginTop: "1vh", marginLeft: "1vw" }}>Our Team</h5>
                <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>10</h5>
            </div>

        </div>
    </div>
</div>


  )
}
