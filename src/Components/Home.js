

import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//     FaHome
// } from "react-icons/fa";
// import { GrServices } from "react-icons/gr";
// import { FcAbout } from "react-icons/fc";
// import { IoMdContacts } from "react-icons/io";
import {
    Business,
    VerifiedUser,
    PeopleAltOutlined,
    AssignmentIndOutlined
} from '@mui/icons-material';
// import {
//     CloudOutlined as CloudOutlinedIcon,
//     DataUsageOutlined as DataUsageOutlinedIcon,
//     WebOutlined as WebOutlinedIcon,
//     PhoneAndroidOutlined as PhoneAndroidOutlinedIcon,
//     BusinessCenterOutlined as BusinessCenterOutlinedIcon,
//     WorkOutlineOutlined as WorkOutlineOutlinedIcon
// } from '@mui/icons-material';
// import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import header7 from '../images/header7.jpg';
import mainImage from '../images/main.png';
import dataManagementImage from '../images/datamanagement.jpg';
import cloud from '../images/cloud1.webp'
import web from '../images/web.jpg'

// import logo from '../images/logo1.jpeg'

const DataManagement = () => {
    return(
        <div className='management'>
                <div className='submanagecontent'>
                    <h4>Empowering Businesses with Advanced Data Management Solutions</h4>
                    <div>
                    <span>Comprehensive Data Organization</span>
                    </div>
                    <p>Transform your business with expert data management solutions for actionable insights.</p>
                    <div>
                    <span>Tailored Data Governance Strategies</span>
                    </div>
                    <p>Empower your organization with efficient data management, secure storage, and insightful analysis tailored to your business goals</p>
                    <div>
                    <span>Specialized Data Tools</span>
                    </div>
                    <p>Unlock your data's potential with advanced pipelines, engineering platforms, and cutting-edge visualization tools for enhanced business performance.</p>
                    <div>
                    <span>Streamlined Business Intelligence</span>
                    </div>
                    <p>Enhance business intelligence with customized solutions that streamline governance, ensure secure storage, and provide clear analysis for strategic decisions.</p>
                    <div>
                    <span>Expert Data Management Consulting</span>
                    </div>
                    <p>Gain access to expert consulting services focused on seamless integration, optimization, and actionable insights to boost efficiency and foster growth.</p>
                </div>
                <div className='submanageimg'>
                    <img src={dataManagementImage} alt="Data Management" />
                </div>
            </div>
    )
}

const CloudSolutions = () => {
    return (
        <div className='cloudsolutions'>
            <div className='cloudimg'>
                {/* Placeholder for cloud solutions image */}
                <img src={cloud} alt='Cloud Solutions'/>
            </div>
            <div className='cloudcontent'>
            <h4>Revolutionize Your Business with Cloud Solutions</h4>
                <div>
                    <span>Scalable Cloud Strategies</span>
                </div>
                <p>Unlock scalable solutions that evolve with your business, ensuring seamless integration and superior data management.</p>
                <div>
                    <span>Secure and Customized Solutions</span>
                </div>
                <p>Experience unmatched security and customization with cloud strategies designed to boost your operational efficiency.</p>
                <div>
                    <span>Cutting-Edge Technology</span>
                </div>
                <p>Empower your organization with innovative cloud technologies perfectly tailored to your unique needs</p>
                <div>
                    <span>AWS/GCP/Azure Expertise</span>
                </div>
                <p>Benefit from our expertise in AWS, Google Cloud Platform (GCP), and Microsoft Azure to achieve unparalleled cloud performance.</p>
                <div>
                    <span>Enhanced Operational Efficiency</span>
                </div>
                <p>Transform your operations with cloud solutions that streamline processes, cut costs, and elevate overall business performance.</p>
            </div>
        </div>
    );
};


const WebDevelopment = () => {
    return (
        <div className='webdevelopment'>
            <div className='webcontent'>
            <h3>Application/Web Development</h3>
            <h4>Expertise in Java, Python, .NET, React JS, Node.js, and Angular</h4>
                <div>
                    <span>Java Development</span>
                </div>
                <p>Build scalable enterprise applications and backend systems using Java's robust features. Our team ensures high performance and reliability, suitable for complex and large-scale projects.</p>
                <div>
                    <span>Python Development:</span>
                </div>
                <p>Utilize Python for rapid prototyping, data analysis, and backend development. Python's versatility allows us to deliver efficient, scalable, and maintainable solutions for diverse applications.</p>
                <div>
                    <span>.NET Development</span>
                </div>
                <p>Develop powerful web applications and enterprise solutions with Microsoft's .NET framework. We harness the power of .NET to create secure, efficient, and feature-rich applications tailored to your needs.</p>
                <div>
                    <span>React JS Development</span>
                </div>
                <p>Create interactive and responsive user interfaces for modern web applications. Using React JS, we build high-performance frontends that enhance user engagement and experience.</p>
                <div>
                    <span>Node.js and Angular Development</span>
                </div>
                <p>Develop scalable server-side applications with Node.js and create dynamic single-page applications with Angular. Our solutions ensure optimal performance, real-time capabilities, and seamless user experiences.</p>
            </div>
            <div className='webimg'>
                {/* Placeholder for cloud solutions image */}
                <img src={web} alt='Cloud Solutions'/>
            </div>
        </div>
    );
};




const MainContent = () => {
    return (
        <div className="main-content">
            <div className="hero" style={{
                backgroundImage: `url(${header7})`
            }}>
                <div className="hero-content">
                    <h1>GLOBAL SG TECH</h1>
                    <h5>Designing the web, developing the future.</h5>
                </div>
            </div>
            
            <div className='vision'>
                <p>Your vision, our expertise</p>
            </div>
            <div className='passion'>
                <h4>With a passion for design and a commitment to excellence,
                    our team delivers exceptional websites,</h4>
                <h4>mobile applications, and software tailored to meet your unique needs.</h4>
            </div>
            <div className='contenthead'>
                <div className='subheaderimg'>
                    <img src={mainImage} alt="Data Management" />
                </div>
                <div className='subheadercontent'>
                    <h2>Welcome to Sai Guberan Pvt Ltd</h2>
                    <h4>Achieving Better Business</h4>
                    <p>At Sai Guberan Pvt Ltd, we focus on delivering fast, customer-centered service that exceeds expectations and adds exceptional value to your business.</p>
                    <div className='icon-text'>
                        <Business className='icon' /> <span>Strong Partnerships</span>
                    </div>
                    <p>We believe in building strong, successful partnerships that save costs and ensure long-term growth.</p>
                    <div className='icon-text'>
                        <VerifiedUser className='icon' /> <span>Secure Data</span>
                    </div>
                    <p>Your information is safe with us. We use rigorous testing to keep your data secure and build trust for mutual growth.</p>
                    <div className='icon-text'>
                        <AssignmentIndOutlined className='icon' /> <span>Exceeding Expectations</span>
                    </div>
                    <p>We promise to deliver more. Customer satisfaction, top-notch quality, and timely service are our priorities.</p>
                    <div className='icon-text'>
                        <PeopleAltOutlined className='icon' /> <span>Immersive Internship Programs</span>
                    </div>
                    <p>Our internship programs offer immersive training experiences spanning 1, 3, and 6 months, providing practical skills and insights to future professionals.</p>
                </div>
            </div>
            <DataManagement />
            <CloudSolutions />
            <WebDevelopment />
            {/* <Footer /> */}
        </div>
    );
};

export default MainContent;