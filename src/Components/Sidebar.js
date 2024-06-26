import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faBriefcase, faChartBar, faEdit, faFolder, faImages, faUserCog, faUserFriends, faWrench } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Sidebar.css';

export default function Sidebar() {
    const [isSideBarVisible, setIsSideBarVisible] = useState(true);
    const [clickedLinkIndex, setClickedLinkIndex] = useState(null);
    const [hoveredDropdownIndex, setHoveredDropdownIndex] = useState(null);
    const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
    const navigation = useNavigate('');

    const arrayOfSidebarLinks = [
        {
            id: 1,
            name: 'Dashboard',
            link: '/admin_dashboard',
            icon: faChartBar,
        },
        {
            id: 2,
            name: 'Product Category',
            link: '/admin_category',
            icon: faFolder,
        },
        {
            id: 3,
            name: 'Product Gallery',
            link: '/admin_gallery',
            icon: faImages,
        },
        {
            id: 4,
            name: 'Product Catalogs',
            link: '/admin_catalogs',
            icon: faBook,
        },
        {
            id: 5,
            name: 'Our Teams',
            link: '/admin_teams',
            icon: faUserFriends,
        },
        {
            id: 6,
            name: 'Our Services',
            link: '/admin_services',
            icon: faWrench,
            services: [
                {
                    id: 101,
                    name: 'LiuGong Services',
                    link: '/admin_services/liugong',
                    icon: faChartBar,
                },
                {
                    id: 102,
                    name: 'Ajax Services',
                    link: '/admin_services/ajax',
                    icon: faChartBar,
                },
                {
                    id: 103,
                    name: 'Rental Services',
                    link: '/admin_services/rental',
                    icon: faChartBar,
                },
            ],
        },
        {
            id: 7,
            name: 'Careers',
            link: '/admin_careers',
            icon: faBriefcase,
        },
        {
            id: 8,
            name: 'Employee Manage',
            link: '/admin_employee',
            icon: faUserCog,
        },
        {
            id: 9,
            name: 'Price Variation Limit',
            link: '/admin_price_variation',
            icon: faEdit,
        },
    ];

    useEffect(() => {
        const linkDivs = document.querySelectorAll('.link_div');
        linkDivs.forEach((linkDiv, index) => {
            setTimeout(() => {
                linkDiv.style.opacity = '1';
                linkDiv.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, [isSideBarVisible]);

    const handleClick = (index) => {
        if (index === clickedLinkIndex) {
            setClickedLinkIndex(null);
        } else {
            setClickedLinkIndex(index);
        }
    };

    const handleDropdownEnter = (index) => {
        setHoveredDropdownIndex(index);
    };

    const handleDropdownLeave = () => {
        setHoveredDropdownIndex(null);
    };

    const handleServiceEnter = (index) => {
        setHoveredServiceIndex(index);
        setHoveredDropdownIndex(index);
        console.log(index)
    };

    const handleServiceLeave = () => {
        // setHoveredServiceIndex(null);
    };

    return (
        <div>
            {isSideBarVisible && <div className="sidebar-overlay" onClick={() => setIsSideBarVisible(!isSideBarVisible)}></div>}
            <FontAwesomeIcon id='barsclick' onClick={() => setIsSideBarVisible(!isSideBarVisible)} style={{ fontSize: '25px', color: 'black', display: 'block' }} icon={faBars} />
            {isSideBarVisible && (
                <div className={`sidebar ${isSideBarVisible ? 'show' : ''}`} style={{ backgroundColor: '#114693', paddingBottom: '20px' }}>
                    {arrayOfSidebarLinks.map((item, index) => (
                        <div key={index} className={`link_div ${index === clickedLinkIndex ? 'clicked' : 'show'}`} onClick={() => handleClick(index)} onMouseEnter={() => handleDropdownEnter(index)} onMouseLeave={handleDropdownLeave} style={{ marginTop: '2vh', height: '6vh' }}>
                            <div className='d-flex' style={{ justifyContent: 'start', zIndex:"900" }} id='dashboard_link'>
                                <div style={{ width: '30px' }}>
                                    <FontAwesomeIcon className='link_icons' icon={item.icon} style={{ padding: '0px', fontSize: '15px', color: '#ffff' }} />
                                </div>
                                <h6 style={{ fontSize: '14px', color: '#ffff' }}>{item.name}</h6>
                            </div>
                            <div style={{zIndex:1000}}>
                                {index === hoveredDropdownIndex && item.services && (
                                    <div onMouseEnter={() => handleServiceEnter(index)} onMouseLeave={handleServiceLeave} style={{ zIndex: 100 }} className='services-dropdown'>
                                        {item.services.map((service, i) => (
                                            <Link key={i} className='service-link' to={service.link} onClick={() => setIsSideBarVisible(false)}>
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
