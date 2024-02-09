import React, { useEffect, useRef } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import lightBgImage from '../assets/light_background.jpg';
import '../CSS/Dashboard.css';
import Footer from '../Components/Footer';

export default function Dashboard() {
  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();

  useEffect(() => {
    // Add the class to trigger the animation after the component is mounted
    cardRef1.current.classList.add('show');
    cardRef2.current.classList.add('show');
    cardRef3.current.classList.add('show');
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Sidebar />
      <Navbar />
      <img src={lightBgImage} alt="" style={{ height: "200px", marginTop: "90px", position: "absolute", width: "calc(100% - 280px)", marginLeft: "280px" }} />
      <div id="dashboard_section" style={{ width: "calc(100% - 280px)", marginLeft: "280px", marginTop: "120px", zIndex: "1000", position: "relative", display: 'flex', flexDirection: 'column' }}>
        <div id="top_section_dashboard" className='d-flex' style={{ marginTop: "1px" }}>
          {/* Content on the left */}
          <div style={{ marginLeft: "50px", flex: 1 }}>
            <h3><strong>Dashboard</strong></h3>
            <div className="d-flex mt-3">
              <i className="fa-solid fa-house mt-1"></i>
              <h5 className='ml-2'>Dashboard</h5>
            </div>
          </div>
          <div className="bg-white d-flex" style={{ height: "5vh", width: "31.5%", borderRadius: "5vw", marginRight: "50px", alignSelf: "flex-end" }}>
            <div className='d-flex' style={{ width: "24%", height: "4vh", border: "1px solid lightgray", borderRadius: "5vw", marginLeft: "1%", marginTop: "0.5vh" }}>
              <div className='inner_circles' style={{ width: "25px", height: "25px", borderRadius: "4vw", backgroundColor: "#09c2de", marginTop: "0.5vh", marginLeft: "0.2vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h6 style={{ fontSize: "0.8vw", marginLeft: "0.2vw", marginTop: "0.4vh" }} className=''><strong>Deposit</strong></h6>
              </div>
            </div>
            <div className='d-flex' style={{ width: "24%", height: "4vh", border: "1px solid lightgray", borderRadius: "5vw", marginLeft: "1%", marginTop: "0.5vh" }}>
              <div className='inner_circles' style={{ width: "25px", height: "25px", borderRadius: "4vw", backgroundColor: "#09c2de", marginTop: "0.5vh", marginLeft: "0.2vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-money-bill"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h6 style={{ fontSize: "0.8vw", marginLeft: "0.2vw", marginTop: "0.4vh" }} className=''><strong>Withdraw</strong></h6>
              </div>
            </div>
            <div className='d-flex' style={{ width: "24%", height: "4vh", border: "1px solid lightgray", borderRadius: "5vw", marginLeft: "1%", marginTop: "0.5vh" }}>
              <div className='inner_circles' style={{ width: "25px", height: "25px", borderRadius: "4vw", backgroundColor: "#09c2de", marginTop: "0.5vh", marginLeft: "0.2vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-money-bill-transfer"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h6 style={{ fontSize: "0.8vw", marginLeft: "0.2vw", marginTop: "0.4vh" }} className=''><strong>Transfer</strong></h6>
              </div>
            </div>
            <div className='d-flex' style={{ width: "23.5%", height: "4vh", border: "1px solid lightgray", borderRadius: "5vw", marginLeft: "1%", marginTop: "0.5vh" }}>
              <div className='inner_circles' style={{ width: "25px", height: "25px", borderRadius: "4vw", backgroundColor: "#09c2de", marginTop: "0.5vh", marginLeft: "0.2vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-terminal"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h6 style={{ fontSize: "0.8vw", marginLeft: "0.2vw", marginTop: "0.4vh" }} className=''><strong>Terminal</strong></h6>
              </div>
            </div>
          </div>
        </div>
        <div id="top_cards" className='d-flex' style={{ marginTop: "20px" }}>
          <div className="cards" style={{ marginLeft: "2vw", width: "15vw", height: "150px", backgroundColor: "white", marginTop: "2vh", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
              <i className="fa-solid fa-wallet" style={{ fontSize: "1vw" }}></i>
            </div>
            <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>Wallet Balance</h5>
            <div className="d-flex" style={{ marginLeft: "1vw" }}>
              <h5 style={{ fontSize: "15px" }}><strong>0.00 USD</strong></h5>
              <i style={{ fontSize: "15px", marginTop: "0.2vh" }} className="fa-solid fa-circle-info ml-1"></i>
            </div>
          </div>

          <div className="cards" style={{ marginLeft: "2vw", width: "15vw", height: "150px", backgroundColor: "white", marginTop: "2vh", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
              <i className="fa-solid fa-file-invoice-dollar" style={{ fontSize: "1vw" }}></i>
            </div>
            <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>Total Deposit</h5>
            <div className="d-flex" style={{ marginLeft: "1vw" }}>
              <h5 style={{ fontSize: "15px" }}><strong>0.00 USD</strong></h5>
            </div>
          </div>

          <div className="cards" style={{ marginLeft: "2vw", width: "15vw", height: "150px", backgroundColor: "white", marginTop: "2vh", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
              <i className="fa-solid fa-money-bill-trend-up" style={{ fontSize: "1vw" }}></i>
            </div>
            <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>Total Withdrawal</h5>
            <div className="d-flex" style={{ marginLeft: "1vw" }}>
              <h5 style={{ fontSize: "15px" }}><strong>0.00 USD</strong></h5>
            </div>
          </div>

          <div className="cards" style={{ marginLeft: "2vw", width: "15vw", height: "150px", backgroundColor: "white", marginTop: "2vh", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
              <i className="fa-solid fa-credit-card" style={{ fontSize: "1vw" }}></i>
            </div>
            <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>Total Credit</h5>
            <div className="d-flex" style={{ marginLeft: "1vw" }}>
              <h5 style={{ fontSize: "15px" }}><strong>0 USD</strong></h5>
            </div>
          </div>

          <div className="cards" style={{ marginLeft: "2vw", marginRight: "1vw", width: "14vw", height: "150px", backgroundColor: "white", marginTop: "2vh", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
              <i className="fa-solid fa-scale-unbalanced" style={{ fontSize: "1vw" }}></i>
            </div>
            <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>Total Equity</h5>
            <div className="d-flex" style={{ marginLeft: "8.5vw" }}>
              <button style={{ backgroundColor: "black", color: "#20c997", borderRadius: "20px", width: "3.4vw", fontSize: "0.7vw", fontWeight: "bold", height: "30px" }}>Fetch</button>
            </div>
          </div>

        </div>
        <div id="dashboard_section_2" style={{ marginTop: "70px" }} className='d-flex'>
          <div
            ref={cardRef1}
            className="section2cards card bg-dark d-flex card-animation"
            id="first_card"
            style={{
              width: "21vw",
              height: "250px",
              marginLeft: "6vw",
              backgroundColor: "white",
              border: "2px solid lightgray",
              borderRadius: "20px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="card-body">
              <h3 className='card-title' style={{ color: "#20c997", fontSize: "1.5vw" }}>What is Forex ?</h3>
              <h5 className='text-white card-text d-flex mt-4' style={{ textWrap: "wrap", fontSize: "1.1vw" }}>When you exchange your Currency to buy an another Currency, Such as Dollar , Euro , Pounds.</h5>
              <h4 className='text-white' style={{ fontSize: "1.2vw" }}><strong>That is called Forex Exchange.</strong></h4>
            </div>
          </div>
          <div
            ref={cardRef2}
            className="section2cards card bg-dark d-flex card-animation"
            id="second_card"
            style={{
              width: "21vw",
              height: "250px",
              marginLeft: "6vw",
              backgroundColor: "white",
              border: "2px solid lightgray",
              borderRadius: "20px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="card-body">
              <h3 className='card-title' style={{ color: "#20c997", fontSize: "1.5vw" }}>Why trade in Forex Grow ?</h3>
              <h5 className='text-white card-text d-flex mt-4' style={{ textWrap: "wrap", fontSize: "1.2vw" }}>At Forex Grow, we strive to provide an exceptional trading experience that sets us apart from others.</h5>
            </div>
          </div>

          <div
            ref={cardRef3}
            className="section2cards card bg-dark d-flex card-animation"
            id="second_card"
            style={{
              width: "21vw",
              height: "250px",
              marginLeft: "6vw",
              backgroundColor: "white",
              border: "2px solid lightgray",
              borderRadius: "20px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="card-body">
              <h3 className='card-title' style={{ color: "#20c997", fontSize: "1.5vw" }}>MetaTrader 4/5 ?</h3>
              <h5 className='text-white card-text d-flex mt-4' style={{ textWrap: "wrap", fontSize: "1.2vw" }}>Meta Trader 4/5 is a powerful platform for Forex and Exchange markets.</h5>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
