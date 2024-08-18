import Header from "../Components/Header"
import serviceimg1 from '../images/contact.png';
import contact1 from '../images/contact1.png'
import React, { useState } from 'react';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from './Footer'





const MainContent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name || formData.name.length < 4) {
            formErrors.name = "Please enter at least 4 characters";
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Please enter a valid email address";
        }
        if (!formData.mobile || !/^\d{10,}$/.test(formData.mobile)) {
            formErrors.mobile = "Please enter at least a 10-digit number";
        }
        if (!formData.message || formData.message.trim() === '') {
            formErrors.message = "Please write something for us";
        }
        return formErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setLoading(false);
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log("Response Status:", response.status);
            const result = await response.json();
            console.log("Response Data:", result);

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', mobile: '', message: '' });
                setErrors({});
            } else {
                setErrors({ form: result.message });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({ form: 'An error occurred while submitting the form.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="main-content">
                <div className="hero" style={{ backgroundImage: `url(${serviceimg1})` }}>
                    <div className="hero-content">
                        {/* Hero content goes here */}
                    </div>
                </div>
                <div className="container">
                    <div className="contact-style-two-items">
                        <div className="shape-left-top"></div>
                        <div className="contact-row">
                        <div className="contact-style-two contact-item">
                                <div className="item">
                                    <ContactPhoneIcon style={{ fontSize: 90 }} className="icon" />
                                    <i className="fas fa-phone-alt"></i>
                                    <h4 className="title">Contact</h4>
                                    <p>
                                        Call us now and experience how we deliver exceptional service with a personal touch.
                                    </p>
                                    <a href="tel:+918870944351">+91 8870944351 | +91 9345513453</a>
                                </div>
                            </div>
                            <div className="contact-style-two contact-item">
                                <div className="item">
                                    <MailIcon style={{ fontSize: 90 }} className="icon" />
                                    <i className="fas fa-envelope-open-text"></i>
                                    <h4 className="title">Email</h4>
                                    <p>
                                        Connect with us via email and unlock the gateway to exceptional service and personalized support.
                                    </p>
                                    <a href="mailto:info@globalsgtech.com">info@globalsgtech.com</a>
                                </div>
                            </div>
                            <div className="contact-style-two contact-item">
                                <div className="item">
                                    <LocationOnIcon style={{ fontSize: 90 }} className="icon" />
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h4 className="title">Location</h4>
                                    <p>
                                        No.6952, San Pedro Cir,<br /> Buena Park,<br />California - 90620.
                                    </p>
                                    <a href="https://www.google.com/maps/place/6952+San+Pedro+Cir,+Buena+Park,+CA+90620,+USA/@33.8419424,-118.0148269,17z/data=!3m1!4b1!4m6!3m5!1s0x80dd2bfc190b01d5:0xa8e025c8bea47cca!8m2!3d33.8419424!4d-118.012252!16s%2Fg%2F11c5md587j?entry=ttu">Check Location</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-image-container">
                    <div className="image-container">
                        <img src={contact1} alt="Service" />
                    </div>
                    <div className="form-container">
                        <h3>Send your requirements:</h3>
                        {submitted ? (
                            <div className="thank-you-message">
                                Your message has been sent. Thank you!
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <p className="error">{errors.name}</p>}
                                </div>
                                <div className="form-group">
                                    <label>Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className="error">{errors.email}</p>}
                                </div>
                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                    {errors.mobile && <p className="error">{errors.mobile}</p>}
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.message && <p className="error">{errors.message}</p>}
                                </div>
                                <button type="submit" disabled={loading}>
                                    {loading ? 'Loading...' : 'Submit'}
                                </button>
                                {errors.form && <p className="error">{errors.form}</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default MainContent;