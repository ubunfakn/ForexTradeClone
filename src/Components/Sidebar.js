import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faBriefcase, faChartBar, faEdit, faFolder, faGraduationCap, faImages, faServer, faUserCog, faUserFriends, faWrench } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    const [isSideBarVisible, setIsSideBarVisible] = useState(true);
    const [clickedLinkIndex, setClickedLinkIndex] = useState(null);
    const navigation = useNavigate("");

    const arrayOfSidebarLinks = [
        {
            id: 1,
            name: "Dashboard",
            link: "/admin_dashboard",
            icon: faChartBar,
        },
        {
            id: 2,
            name: "Product Category",
            link: "/admin_category",
            icon: faFolder,
        },
        {
            id: 3,
            name: "Product Gallery",
            link: "/admin_gallery",
            icon: faImages,
        },
        {
            id: 4,
            name: "Product Catalogs",
            link: "/admin_catalogs",
            icon: faBook,
        },
        {
            id: 5,
            name: "Our Teams",
            link: "/admin_teams",
            icon: faUserFriends,
        },
        {
            id: 6,
            name: "Our Services",
            link: "/admin_dashboard",
            icon: faWrench,
            services: [
                {
                    id: 101,
                    name: "LiuGong Services",
                    link: "/admin_dashboard",
                    icon: faChartBar,
                },
                {
                    id: 102,
                    name: "Ajax Services",
                    link: "/admin_dashboard",
                    icon: faChartBar,
                },
                {
                    id: 102,
                    name: "Rental Services",
                    link: "/admin_dashboard",
                    icon: faChartBar,
                },
            ]
        },
        {
            id: 7,
            name: "Careers",
            link: "/admin_dashboard",
            icon: faBriefcase,
        },
        {
            id: 8,
            name: "Employee Manage",
            link: "/admin_dashboard",
            icon: faUserCog,
        },
        {
            id: 9,
            name: "Price Variation Limit",
            link: "/admin_dashboard",
            icon: faEdit,
        },
    ]
    useEffect(() => {
        // Trigger animation on mount
        const linkDivs = document.querySelectorAll('.link_div');
        linkDivs.forEach((linkDiv, index) => {
            setTimeout(() => {
                linkDiv.style.opacity = '1';
                linkDiv.style.transform = 'translateY(0)';
            }, index * 200); // Adjust the delay as needed
        });
    }, [isSideBarVisible]); 

    const handleClick = (index) => {
        if (index === clickedLinkIndex) {
            setClickedLinkIndex(null); // Deselect if already selected
        } else {
            setClickedLinkIndex(index); // Select the clicked index
        }
        // navigation(arrayOfSidebarLinks[index].link);
    };
    return (
        <div>
        {isSideBarVisible && <div className="sidebar-overlay" onClick={() => setIsSideBarVisible(!isSideBarVisible)}></div>}
        <FontAwesomeIcon id='barsclick' onClick={() => setIsSideBarVisible(!isSideBarVisible)} style={{ fontSize: "25px", color: "black", display: "block" }} icon={faBars} />
        {isSideBarVisible && (
            <div className={`sidebar ${isSideBarVisible ? 'show' : ''}`} style={{ backgroundColor: "#114693", paddingBottom: "20px" }}>
                {arrayOfSidebarLinks.map((item, index) => (
                    <div key={index}  className={`link_div ${index===clickedLinkIndex ? 'clicked' : 'show'}`} onClick={()=>handleClick(index)} style={{ marginTop: "2vh", height:"6vh" }}>
                        <div className='d-flex' style={{ justifyContent: "start" }} id="dashboard_link">
                            <div style={{ width: "30px" }}>
                                <FontAwesomeIcon className='link_icons' icon={item.icon} style={{ padding: "0px", fontSize: "15px", color: "#ffff" }} />
                            </div>
                            <h6 style={{ fontSize: "14px", color: "#ffff" }}>{item.name}</h6>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
    
    )
}
