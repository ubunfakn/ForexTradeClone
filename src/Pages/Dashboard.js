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
    <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#e5e9f2" }}>
      <Sidebar />
      <Navbar />
      <img src={lightBgImage} alt="" style={{ height: "200px", marginTop: "90px", position: "absolute", width: "calc(100% - 280px)", marginLeft: "280px", zIndex: "0" }} />
      <div id="dashboard_section" style={{ width: "calc(100% - 280px)", marginLeft: "280px", marginTop: "120px", zIndex: "1", position: "relative", display: 'flex', flexDirection: 'column' }}>
        <div id="top_section_dashboard" className='d-flex' style={{ marginTop: "1px" }}>
          {/* Content on the left */}
          <div style={{ marginLeft: "50px", flex: 1 }}>
            <h3><strong>Dashboard</strong></h3>
            <div className="d-flex mt-3">
              <i className="fa-solid fa-house mt-1"></i>
              <h5 className='ml-2'>Dashboard</h5>
            </div>
          </div>
          <div className="bg-white d-flex" style={{ height: "6vh", width: "22.5%", borderRadius: "5vw", marginRight: "50px", alignSelf: "flex-end" }}>
            <div className='d-flex' style={{ justifyContent: "center", alignItems: "center", width: "32%", height: "5vh", border: "1px solid lightgray", borderRadius: "5vw", marginLeft: "1%", marginTop: "0.5vh" }}>
              <div className='inner_circles' style={{ width: "30px", height: "30px", borderRadius: "4vw", backgroundColor: "#09c2de", marginLeft: "0.2vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h6 style={{ fontSize: "0.8vw", marginLeft: "0.2vw", marginTop: "0.4vh" }} className=''><strong>Deposit</strong></h6>
              </div>
            </div>
            <div className='d-flex' style={{ justifyContent: "center", alignItems: "center", width: "32%", height: "5vh", border: "1px solid lightgray", borderRadius: "5vw", marginLeft: "1%", marginTop: "0.5vh" }}>
              <div className='inner_circles' style={{ width: "30px", height: "30px", borderRadius: "4vw", backgroundColor: "#09c2de", marginLeft: "0.2vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-money-bill"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h6 style={{ fontSize: "0.8vw", marginLeft: "0.2vw", marginTop: "0.4vh" }} className=''><strong>Withdraw</strong></h6>
              </div>
            </div>
            <div className='d-flex' style={{ justifyContent: "center", alignItems: "center", width: "32%", height: "5vh", border: "1px solid lightgray", borderRadius: "5vw", marginLeft: "1%", marginTop: "0.5vh" }}>
              <div className='inner_circles' style={{ width: "30px", height: "30px", borderRadius: "4vw", backgroundColor: "#09c2de", marginLeft: "0.2vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-money-bill-transfer"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h6 style={{ fontSize: "0.8vw", marginLeft: "0.2vw", marginTop: "0.4vh" }} className=''><strong>Transfer</strong></h6>
              </div>
            </div>
            {/* <div className='d-flex' style={{ width: "23.5%", height: "4vh", border: "1px solid lightgray", borderRadius: "5vw", marginLeft: "1%", marginTop: "0.5vh" }}>
              <div className='inner_circles' style={{ width: "25px", height: "25px", borderRadius: "4vw", backgroundColor: "#09c2de", marginTop: "0.5vh", marginLeft: "0.2vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-terminal"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h6 style={{ fontSize: "0.8vw", marginLeft: "0.2vw", marginTop: "0.4vh" }} className=''><strong>Terminal</strong></h6>
              </div>
            </div> */}
          </div>
        </div>
        <div id="top_cards" className='d-flex' style={{ marginTop: "20px" }}>
          <div className="cards" style={{ marginLeft: "5vw", width: "15vw", height: "170px", backgroundColor: "white", marginTop: "2vh", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
              <i className="fa-solid fa-wallet" style={{ fontSize: "1vw" }}></i>
            </div>
            <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>Wallet Balance</h5>
            <div className="d-flex" style={{ marginLeft: "1vw" }}>
              <h5 style={{ fontSize: "15px" }}><strong>0.00 USD</strong></h5>
              <i style={{ fontSize: "15px", marginTop: "0.2vh" }} className="fa-solid fa-circle-info ml-1"></i>
            </div>
          </div>

          <div className="cards" style={{ marginLeft: "5vw", width: "15vw", height: "170px", backgroundColor: "white", marginTop: "2vh", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
              <i className="fa-solid fa-file-invoice-dollar" style={{ fontSize: "1vw" }}></i>
            </div>
            <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>Total Deposit</h5>
            <div className="d-flex" style={{ marginLeft: "1vw" }}>
              <h5 style={{ fontSize: "15px" }}><strong>0.00 USD</strong></h5>
            </div>
          </div>

          <div className="cards" style={{ marginLeft: "5vw", width: "15vw", height: "170px", backgroundColor: "white", marginTop: "2vh", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
              <i className="fa-solid fa-money-bill-trend-up" style={{ fontSize: "1vw" }}></i>
            </div>
            <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>Total Withdrawal</h5>
            <div className="d-flex" style={{ marginLeft: "1vw" }}>
              <h5 style={{ fontSize: "15px" }}><strong>0.00 USD</strong></h5>
            </div>
          </div>

          <div className="cards" style={{ marginLeft: "5vw", width: "14vw", height: "170px", backgroundColor: "white", marginTop: "2vh", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
              <i className="fa-solid fa-credit-card" style={{ fontSize: "1vw" }}></i>
            </div>
            <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>Total Earning</h5>
            <div className="d-flex" style={{ marginLeft: "1vw" }}>
              <h5 style={{ fontSize: "15px" }}><strong>0 USD</strong></h5>
            </div>
          </div>

          {/* <div className="cards" style={{ marginLeft: "2vw", marginRight: "1vw", width: "14vw", height: "150px", backgroundColor: "white", marginTop: "2vh", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ marginTop: "2vh", width: "45px", height: "45px", borderRadius: "75px", backgroundColor: "#20c997", marginLeft: "1vw" }}>
              <i className="fa-solid fa-scale-unbalanced" style={{ fontSize: "1vw" }}></i>
            </div>
            <h5 style={{ fontSize: "15px", marginTop: "1vh", marginLeft: "1vw" }}>Total Equity</h5>
            <div className="d-flex" style={{ marginLeft: "8.5vw" }}>
              <button style={{ backgroundColor: "black", color: "#20c997", borderRadius: "20px", width: "3.4vw", fontSize: "0.7vw", fontWeight: "bold", height: "30px" }}>Fetch</button>
            </div>
          </div> */}

        </div>
        <div id="referal_section" style={{ marginTop: "70px" }} className='d-flex'>
          <div className="card1 d-flex align-items-center" style={{ marginLeft: "2%", width: "96%", height: "170px", backgroundColor: "white", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <h3 className='ml-5' style={{ color: "#4169E1", fontSize: "1.1vw" }}>Referral Link</h3>
            <Link><h4 style={{ marginLeft: "8vw", color: "darkblue", cursor: "pointer", fontSize: "1vw" }}>http://login.fxgrow.club/referral-signup/ubunfakn</h4></Link>
            <h3 style={{ cursor: "pointer", fontSize: "1vw" }} className='ml-3'><i className='fa-regular fa-copy'></i></h3>
          </div>
        </div>
        <div id="capping_section" style={{ marginTop: "40px" }} className='d-flex'>
          <div className="card1 p-4 mb-4" style={{ marginLeft: "2%", width: "96%", height: "auto", backgroundColor: "#A68CE3", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <h5 style={{fontSize:"1vw", color:"white"}}><strong>Capping Status (X3)</strong></h5>
            <div className="d-flex ml-3 mt-4 text-white mr-4" style={{justifyContent:"space-between"}}>
              <p style={{fontSize:"0.8vw"}}>00.00% Earned</p>
              <p style={{fontSize:"0.8vw"}}>100% Remains</p>
            </div>
            <div className="d-flex mt-2 mb-4 bg-white" style={{height:"5px"}}>
              <div className="bg-primary" style={{height:"100%", width:"2%"}}></div>
            </div>
          </div>
        </div>
        <div id="parted_section" style={{ marginTop: "40px" }} className='d-flex mb-5'>
          <div id="first_part" style={{ marginLeft: "2%", width: "58%" }}>
            <div className="card1 d-flex align-items-center" style={{ width: "100%", height: "auto", backgroundColor: "white", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
              <img src={rewardImage} className='p-1' alt="" style={{ height: "30vh", width: "98%" }} />
            </div>
            <div className="card1 d-flex align-items-center mt-5" style={{ width: "100%", height: "auto", backgroundColor: "white", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
              <img src={graph} className='p-1' alt="" style={{ height: "auto", width: "98%" }} />
            </div>
            <div className="card1 align-items-center mt-5" style={{ width: "100%", height: "auto", backgroundColor: "white", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
              <h3 className='p-4' style={{ color: "#4169E1" }}>Package Purchase</h3>
              <table className="table" style={{ width: "98%", marginLeft: "1%", marginBottom: "3%" }}>
                <thead>
                  <tr>
                    <th style={{ color: "gray" }} scope="col">S. No.</th>
                    <th style={{ color: "gray" }} scope="col">Date</th>
                    <th style={{ color: "gray" }} scope="col">Package Price($)</th>
                    <th style={{ color: "gray" }} scope="col">Package Name</th>
                    <th style={{ color: "gray" }} scope="col">Package Type</th>
                    <th style={{ color: "gray" }} scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
            </div>
            <div className="card1 align-items-center mt-5" style={{ width: "100%", height: "auto", backgroundColor: "white", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
              <h3 className='p-4' style={{ color: "#4169E1" }}>Recent Withdrawals</h3>
              <table className="table" style={{ width: "98%", marginLeft: "1%", marginBottom: "3%" }}>
                <thead>
                  <tr>
                    <th style={{ color: "gray" }} scope="col">S. No.</th>
                    <th style={{ color: "gray" }} scope="col">Date</th>
                    <th style={{ color: "gray" }} scope="col">Hash Code</th>
                    <th style={{ color: "gray" }} scope="col">Amount</th>
                    <th style={{ color: "gray" }} scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
            </div>
          </div>
          <div id="second_part" style={{ marginLeft: "2%", width: "38%" }}>
            <div className="card1 align-items-center" style={{ marginLeft: "2%", width: "96%", height: "auto", backgroundColor: "white", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
              <h5 className='p-4' style={{ color: "#4169E1", fontSize: "1vw" }}>My Recent Earning</h5>
              <div className="d-flex p-4" style={{ backgroundColor: "#4169E1", justifyContent: "space-between" }}>
                <h5 className='text-white' style={{ fontSize: "0.9vw" }}>Income Summary</h5>
                <h5 className='text-white' style={{ fontSize: "0.9vw" }}>Income Amount</h5>
              </div>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Growth Bonus</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>$ 0.00 / 0.00%</p>
              </div>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Direct Bonus</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>$ 0.00 / 0.00%</p>
              </div>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Matrix Level Bonus</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>$ 0.00 / 0.00%</p>
              </div>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Hold Matrix Level Bonus</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>$ 0.00 / 0.00%</p>
              </div>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Matching Bonus</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>$ 0.00 / 0.00%</p>
              </div>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Victory Club</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>$ 0.00 / 0.00%</p>
              </div>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Growth Generation Bonus</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>$ 0.00 / 0.00%</p>
              </div>
            </div>

            <div className="card1 align-items-center mt-5" style={{ marginLeft: "2%", width: "96%", height: "auto", backgroundColor: "white", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
              <h5 className='p-4' style={{ color: "#4169E1", fontSize: "1vw" }}>Profile Deatils</h5>
              <div className="d-flex p-4" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }}>Name </p>
                <p style={{ fontSize: "0.8vw" }}>Ankit Kumar Nashine</p>
              </div>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Register Date</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>11/02/2024</p>
              </div>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>First Purchase Date</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'></p>
              </div>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Email ID</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>ankit2003nashine@gmail.com</p>
              </div>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Mobile No.</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>+91 8602185525</p>
              </div>
            </div>

            <div className="card1 align-items-center mt-5" style={{ marginLeft: "2%", width: "96%", height: "auto", backgroundColor: "white", border: "2px solid lightgray", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
              <h5 className='p-4' style={{ color: "#4169E1", fontSize: "1vw" }}>Sponsor Details</h5>
              <div className="d-flex p-3" style={{ justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Name</p>
                <p style={{ fontSize: "0.8vw" }} className='text-dark'>Crypto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
