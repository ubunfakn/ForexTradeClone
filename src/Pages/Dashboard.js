import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import '../CSS/Dashboard.css';
import AddCategoryModal from '../Components/AddCategoryModal';
import AddGalleryModal from '../Components/AddGalleryModal';
import AddCatalogModal from '../Components/AddCatalogModal';
import AddTeamModal from '../Components/AddTeamModal';
import AddTestimonialModal from '../Components/AddTestimonialModal';
import AddEnquiryMail from '../Components/AddEnquiryMail';
import AjaxServicesModal from '../Components/AjaxServicesModal';
import LuiGongServicesModal from '../Components/LuiGongServicesModal';
import RentalServicesModal from '../Components/RentalServicesModal';
import SiteViewConfigModal from '../Components/SiteViewConfigModal';
import CareerModal from '../Components/CareerModal';
import AddEmployeeModal from '../Components/AddEmployeeModal';

export default function Dashboard() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#fff" }}>
            <Navbar />
            <Sidebar />
            <div id="dashboard_section" style={{ width: "calc(100% - 180px)", marginLeft: "180px", marginTop: "80px", zIndex: "1", position: "relative", display: 'flex', flexDirection: 'column' }}>
                <div id="top_section_dashboard" className='d-flex' style={{ marginTop: "1px" }}>
                    {/* Content on the left */}
                    <div id='side_panel_heading' style={{ marginLeft: "50px", flex: 1 }}>
                        {/* <h3><strong>Dashboard</strong></h3> */}
                        <div className="d-flex mt-1 text-dark">
                            <i className="fa-solid fa-house mt-1"></i>
                            <h5 className='ml-2'>Dashboard</h5>
                        </div>
                    </div>
                </div>
                <div id="top_cards" className='d-flex' style={{ marginTop: "10px", marginLeft: "" }}>
                    <div className="cards d-flex justify-content-evenly align-items-center animated fadeInUp" style={{ paddingTop: "5px", paddingBottom: "5px", marginLeft: "5vw", width: "16.5vw", backgroundColor: "white", marginTop: "2vh", border: "2px solid gray", borderRadius: "10px", boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.4)" }}>
                        <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ width: "30px", height: "30px", borderRadius: "75px", backgroundColor: "#20c997" }}>
                            <i className="fa-solid fa-list" style={{ fontSize: "0.8vw" }}></i>
                        </div>
                        <h5 style={{ fontSize: "1vw", paddingTop: "5px", alignSelf: "center" }}>Total Category</h5>
                        <h5 style={{ fontSize: "1vw", paddingTop: "5px", alignSelf: "center" }}>10</h5>
                    </div>

                    <div className="cards animated fadeInUp d-flex justify-content-evenly align-items-center" style={{ paddingTop: "5px", paddingBottom: "5px", marginLeft: "3vw", width: "16.5vw", backgroundColor: "white", marginTop: "2vh", border: "2px solid gray", borderRadius: "10px", boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.4)" }}>
                        <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ width: "30px", height: "30px", borderRadius: "75px", backgroundColor: "#20c997" }}>
                            <i className="fa-solid fa-shuffle" style={{ fontSize: "0.8vw" }}></i>
                        </div>
                        <h5 style={{ fontSize: "1vw", paddingTop: "5px", }}>Total Models</h5>
                        <h5 style={{ fontSize: "1vw", paddingTop: "5px", }}>10</h5>
                    </div>

                    <div className="cards animated fadeInUp d-flex justify-content-evenly align-items-center" style={{ paddingTop: "5px", paddingBottom: "5px", marginLeft: "3vw", width: "16.5vw", backgroundColor: "white", marginTop: "2vh", border: "2px solid gray", borderRadius: "10px", boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.4)" }}>
                        <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ width: "30px", height: "30px", borderRadius: "75px", backgroundColor: "#20c997" }}>
                            <i className="fa-solid fa-quote-left" style={{ fontSize: "0.8vw" }}></i>
                        </div>
                        <h5 style={{ fontSize: "1vw", paddingTop: "5px", }}>Testimonials</h5>
                        <h5 style={{ fontSize: "1vw", paddingTop: "5px", }}>10</h5>
                    </div>

                    <div className="cards animated fadeInUp d-flex justify-content-evenly align-items-center" style={{ paddingTop: "5px", paddingBottom: "5px", marginLeft: "3vw", width: "16.5vw", backgroundColor: "white", marginTop: "2vh", border: "2px solid gray", borderRadius: "10px", boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.4)" }}>
                        <div id="profile_circle" className='d-flex justify-content-center align-items-center' style={{ width: "30px", height: "30px", borderRadius: "75px", backgroundColor: "#20c997" }}>
                            <i className="fa-solid fa-users" style={{ fontSize: "0.8vw" }}></i>
                        </div>
                        <h5 style={{ fontSize: "1vw", paddingTop: "5px", }}>Our Team</h5>
                        <h5 style={{ fontSize: "1vw", paddingTop: "5px", }}>10</h5>
                    </div>

                </div>
            </div>
            <AddCatalogModal variant={"warning"} isUpdate={true} />
            <AddCategoryModal variant={"warning"} isUpdate={true} />
            <AddGalleryModal variant={"warning"} isUpdate={true} />
            <AddTeamModal variant={"warning"} isUpdate={true} />
            <AddTestimonialModal variant={"warning"} isUpdate={true} />
            <AddEnquiryMail variant={"warning"} isUpdate={true} />
            <AjaxServicesModal variant={"warning"} isUpdate={true} />
            <LuiGongServicesModal variant={"warning"} isUpdate={true} />
            <RentalServicesModal variant={"warning"} isUpdate={true} />
            <SiteViewConfigModal variant={"warning"} isUpdate={true} />
            <CareerModal variant={"warning"} isUpdate={true} />
             {/* <AddCatalogModal variant={"success"} isUpdate={false} />
            <AddCategoryModal variant={"success"} isUpdate={false} />
            <AddGalleryModal variant={"success"} isUpdate={false} />
            <AddTeamModal variant={"success"} isUpdate={false} />
            <AddTestimonialModal variant={"success"} isUpdate={false} />
            <AddEnquiryMail variant={"success"} isUpdate={false} />
            <AjaxServicesModal variant={"success"} isUpdate={false} />
            <LuiGongServicesModal variant={"success"} isUpdate={false} />
            <RentalServicesModal variant={"success"} isUpdate={false} />
            <SiteViewConfigModal variant={"success"} isUpdate={false} />
            <CareerModal variant={"success"} isUpdate={false} /> */}
        </div>
    )
}
