

import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//     FaHome
// } from "react-icons/fa";
// import { GrServices } from "react-icons/gr";
// import { FcAbout } from "react-icons/fc";
// import { IoMdContacts } from "react-icons/io";
// import {
//     Business,
//     VerifiedUser,
//     PeopleAltOutlined,
//     AssignmentIndOutlined
// } from '@mui/icons-material';
import {
    CloudOutlined as CloudOutlinedIcon,
    DataUsageOutlined as DataUsageOutlinedIcon,
    WebOutlined as WebOutlinedIcon,
    PhoneAndroidOutlined as PhoneAndroidOutlinedIcon,
    BusinessCenterOutlined as BusinessCenterOutlinedIcon,
    WorkOutlineOutlined as WorkOutlineOutlinedIcon
} from '@mui/icons-material';
// import { FaInstagram, FaLinkedin } from 'react-icons/fa';
// import header7 from '../images/header7.jpg';
// import mainImage from '../images/main.png';
// import dataManagementImage from '../images/datamanagement.jpg';
// import cloud from '../images/cloud1.webp'
// import web from '../images/web.jpg'
// import logo from '../images/logo1.jpeg'





const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Company Information */}
                <div className="footer-section">
                    <h2>Sai Guberan Pvt Ltd</h2>
                    <p>Organizing a software company demands expertise in turning challenges into opportunities. At Sai Guberan Pvt Ltd, we specialize in leveraging technology to drive business success. 
                        Our focus is on delivering innovative solutions that not only meet but exceed expectations, ensuring your growth and competitive edge</p>
                </div>
                
                {/* Services Provided */}
                <div className="footer-section">
                    <h2>Our Services</h2>
                    <div className="service-icons">
                        <div className="service-icon">
                            <WebOutlinedIcon className="icon" />
                            <span>Web Development</span>
                        </div>
                        <div className="service-icon">
                            <CloudOutlinedIcon className="icon" />
                            <span>Cloud Solutions</span>
                        </div>
                        <div className="service-icon">
                            <DataUsageOutlinedIcon className="icon" />
                            <span>Data Engineering</span>
                        </div>
                        {/* <div className="service-icon">
                            <WebOutlinedIcon className="icon" />
                            <span>Web Development</span>
                        </div> */}
                        <div className="service-icon">
                            <PhoneAndroidOutlinedIcon className="icon" />
                            <span>Mobile App Designing</span>
                        </div>
                        <div className="service-icon">
                            <BusinessCenterOutlinedIcon className="icon" />
                            <span>Internship Programs</span>
                        </div>
                        <div className="service-icon">
                            <WorkOutlineOutlinedIcon className="icon" />
                            <span>Kids Programming</span>
                        </div>
                        <div className="service-icon">
                            <WorkOutlineOutlinedIcon className="icon" />
                            <span>IT Staffing</span>
                        </div>
                    </div>
                </div>
                
                {/* Contact Details */}
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p><strong>Phone:+1-646-864-9094</strong></p>
                    <p><strong>Email:gubs@saiguberan.com</strong></p>
                    <p><strong>Address:</strong> 6952 San Pedro Cir, Buena Park, California-90620</p>
                    <div className="social-icons">
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
