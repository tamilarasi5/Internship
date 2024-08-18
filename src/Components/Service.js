import React,{useState} from "react";
import Header from "../Components/Header"
import { useNavigate } from 'react-router-dom';
import serviceimg1 from '../images/serviceimg2.png';
import contimg1 from '../images/contimggg1.jpeg'
import contimg2 from '../images/contimg2.jpeg'
import contimg3 from '../images/contimg3.jpeg'
import contimg4 from '../images/contimg4.jpeg'
import contimg5 from '../images/contimg5.jpeg'
import contimg6 from '../images/contimg6.jpeg'
import Footer from './Footer';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const MainContent = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="main-content">
                <div className="hero" style={{ backgroundImage: `url(${serviceimg1})` }}>
                    <div className="hero-content">
                    </div>
                </div>
            </div>
            <WebDevelopment />
        </>
    );
};
const WebDevelopment = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');
    const navigate = useNavigate();
    const handleDialogOpen = (title, content) => {
        setDialogTitle(title);
        setDialogContent(content);
        setOpenDialog(true);
    };
    const handleDialogClose = () => {
        setOpenDialog(false);
    };
    return (
        <>
            <div className="content-animation1">
                <span className="text-animation1">We are designed to help you achieve your goals and grow your business</span>
            </div>
            <div className="imagegrid">
                <div className="webimg1" onClick={() => handleDialogOpen('Web Development', `
                    <p>Our Web Development service is tailored to meet the unique needs of your business. We offer:</p>
                    <ul>
                        <li><strong>Custom Web Design:</strong> Unique and creative design tailored to your brand.</li>
                        <li><strong>Responsive Layouts:</strong> Ensuring your website looks great on all devices.</li>
                        <li><strong>Performance Optimization:</strong> Fast loading times and smooth user experience.</li>
                        <li><strong>SEO-Friendly Development:</strong> Built with best practices to help your site rank higher.</li>
                    </ul>
                    <p><strong>Benefits:</strong> Boosts your online presence, attracts more visitors, and enhances user engagement.</p>
                `)}>
                    <img src={contimg1} alt="Web Development" />
                    <p className="topic-title">Web Development</p>
                </div>
                <div className="webimg1" onClick={() => handleDialogOpen('Cloud Computing', `
                    <p>Leverage the power of cloud technology to scale and secure your business operations. Our Cloud Computing services include:</p>
                    <ul>
                        <li><strong>Cloud Infrastructure:</strong> Scalable solutions to handle your data and applications.</li>
                        <li><strong>Platform Services:</strong> Tools and services for developing, managing, and deploying applications.</li>
                        <li><strong>Cloud Storage:</strong> Secure and reliable storage solutions with easy access.</li>
                        <li><strong>Data Security:</strong> Advanced security measures to protect your data from breaches.</li>
                    </ul>
                    <p><strong>Benefits:</strong> Flexibility, cost efficiency, and enhanced collaboration for your business.</p>
                `)}>
                    <img src={contimg2} alt="Cloud Computing" style={{height:'334px'}} />
                    <p className="topic-title">Cloud Computing</p>
                </div>
                <div className="webimg1" onClick={() => handleDialogOpen('Data Engineering', `
                    <p>Transform your data into actionable insights with our Data Engineering services. We offer:</p>
                    <ul>
                        <li><strong>Data Pipeline Development:</strong> Design and implement efficient data pipelines.</li>
                        <li><strong>Data Warehousing:</strong> Create robust data warehouses for storing large volumes of data.</li>
                        <li><strong>Big Data Solutions:</strong> Manage and analyze massive datasets with advanced tools.</li>
                        <li><strong>Analytics Integration:</strong> Integrate analytics tools for insightful data analysis.</li>
                    </ul>
                    <p><strong>Benefits:</strong> Improved decision-making, operational efficiency, and data-driven strategies.</p>
                `)}>
                    <img src={contimg3} alt="Data Engineering" />
                    <p className="topic-title">Data Engineering</p>
                </div>
            </div>
            <div className="imagegrid">
                <div className="webimg1" onClick={() => handleDialogOpen('Mobile App Development', `
                    <p>Expand your reach with high-quality mobile apps for iOS and Android. Our services include:</p>
                    <ul>
                        <li><strong>Custom App Design:</strong> Unique designs tailored to enhance user experience.</li>
                        <li><strong>Cross-Platform Development:</strong> Build apps that work seamlessly across both iOS and Android.</li>
                        <li><strong>App Performance Optimization:</strong> Ensure your app runs smoothly with fast load times.</li>
                        <li><strong>Post-Launch Support:</strong> Ongoing maintenance and updates to keep your app up-to-date.</li>
                    </ul>
                    <p><strong>Benefits:</strong> Increased user engagement, broader audience reach, and enhanced brand presence.</p>
                `)}>
                    <img src={contimg4} alt="Mobile App Development" />
                    <p className="topic-title">Mobile App Development</p>
                </div>
                <div className="webimg1" onClick={() => handleDialogOpen('Internship Programming', `
                    <p>Provide hands-on experience for aspiring programmers with our Internship Programming. Features include:</p>
                    <ul>
                        <li><strong>Real-World Projects:</strong> Interns work on real projects to gain practical skills.</li>
                        <li><strong>Mentorship:</strong> Guidance from experienced professionals in the field.</li>
                        <li><strong>Skill Development:</strong> Learn the latest technologies and best practices.</li>
                        <li><strong>Career Opportunities:</strong> Potential for full-time positions based on performance.</li>
                    </ul>
                    <p><strong>Benefits:</strong> Valuable work experience, skill enhancement, and potential career advancement.</p>
                `)}>
                    <img src={contimg5} alt="Internship Programming" />
                    <p className="topic-title">Internship Programming</p>
                </div>
                <div className="webimg1" onClick={() => handleDialogOpen('Kids Programming', `
                    <p>Introduce children to the world of coding with our engaging Kids Programming courses. Offerings include:</p>
                    <ul>
                        <li><strong>Interactive Lessons:</strong> Fun and interactive lessons designed for young learners.</li>
                        <li><strong>Basic Coding Skills:</strong> Teach fundamentals of programming through games and projects.</li>
                        <li><strong>Creative Problem Solving:</strong> Encourage creativity and problem-solving skills.</li>
                        <li><strong>Hands-On Projects:</strong> Build simple projects to apply learned concepts.</li>
                    </ul>
                    <p><strong>Benefits:</strong> Foster early interest in technology, develop critical thinking skills, and prepare for future tech opportunities.</p>
                `)}>
                    <img src={contimg6} alt="Kids Programming" />
                    <p className="topic-title">Kids Programming</p>
                </div>
            </div>
            <Footer />
            <Dialog open={openDialog} onClose={handleDialogClose} fullWidth maxWidth="md" className="dialog-container">
                <DialogTitle>
                    {dialogTitle}
                    <IconButton edge="end" color="inherit" onClick={handleDialogClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <div className="dialog-content" dangerouslySetInnerHTML={{ __html: dialogContent }} />
                </DialogContent>
            </Dialog>
        </>
    );
};
export default MainContent;




