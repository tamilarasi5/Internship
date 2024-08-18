import React from 'react';
import { motion } from 'framer-motion';
import Header from "../Components/Header";
import Footer from './Footer';
import StarIcon from '@mui/icons-material/Star';
import SupportIcon from '@mui/icons-material/Support';
import goal from '../images/goal.avif'
import SettingsIcon from '@mui/icons-material/Settings';
const About = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } }
    };
    const slideInVariants = {
        hidden: { x: '-100vw' },
        visible: { x: 0, transition: { type: 'spring', stiffness: 60 } }
    };
    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };
    return (
        <div>
            <Header />
            <div className="about-container">
                <div className='header-data'>
                    About Us
                </div>
            </div>
            <section className="why-choose-us">
                <motion.h2
                    className="loading-text"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                >
                    Why Choose Us?
                </motion.h2>
                <div className="features">
                    <motion.div
                        className="feature large-feature"
                        initial="hidden"
                        animate="visible"
                        variants={slideInVariants}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <SettingsIcon style={{ fontSize: 60, color: 'cornflowerblue' }} />
                        <h3>Our Process</h3>
                        <p>We follow a well-defined process to ensure each project is executed smoothly and efficiently. From initial consultation to final delivery, our structured approach helps us meet deadlines and exceed expectations, ensuring high-quality results every time.</p>
                    </motion.div>
                    <motion.div
                        className="feature large-feature"
                        initial="hidden"
                        animate="visible"
                        variants={slideInVariants}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <StarIcon style={{ fontSize: 60, color: 'cornflowerblue' }} />
                        <h3>Our Mission</h3>
                        <p>We are committed to delivering high-quality products and services that make a positive impact on our community. Our mission is to drive innovation and excellence, ensuring that our solutions address the real needs of our clients and contribute to their success.</p>
                    </motion.div>
                    <motion.div
                        className="feature large-feature"
                        initial="hidden"
                        animate="visible"
                        variants={slideInVariants}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <SupportIcon style={{ fontSize: 60, color: 'cornflowerblue' }} />
                        <h3>24/7 Technical Support</h3>
                        <p>Our IT experts are available around the clock to assist you with any technical issues. From troubleshooting to system maintenance, we're here to ensure your operations run smoothly and efficiently.</p>
                    </motion.div>
                </div>
            </section>
            <section className="vision-data">
                <div className="image-container">
                    <img src={goal} alt='Cloud Solutions' />
                </div>
                <div className="content-container">
                    <h1 style={{ color: '#071952' }}>Our Goals</h1>
                    <p>At Sai Gubendran Solutions, our goals are centered around pioneering innovation, delivering exceptional value to our customers, and fostering sustainable growth. We aim to lead our industry with groundbreaking solutions, while consistently enhancing our customer experience through tailored, high-quality products and services. Committed to ethical practices, we seek to balance profitability with social and environmental responsibility. By empowering our team, embracing agility, and positively impacting our community, we strive to create a dynamic, inclusive work environment and make a meaningful difference in the world around us.</p>
                </div>
            </section>
            <section className="meet-the-team">
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                >
                    Meet the Team
                </motion.h2>
                <motion.div
                    className="team-members"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div
                        className="team-member"
                        variants={fadeInUp}
                    >
                        <img src="path-to-team-member1.jpg" alt="Team Member 1" />
                        <h3>GUBENDRAN</h3>
                        <p>Director</p>
                    </motion.div>
                    <motion.div
                        className="team-member"
                        variants={fadeInUp}
                    >
                        <img src="path-to-team-member2.jpg" alt="Team Member 2" />
                        <h3>SRISAKTHI SINDUJA</h3>
                        <p>Director</p>
                    </motion.div>
                </motion.div>
            </section>
            <Footer />
        </div>
    );
};
export default About;