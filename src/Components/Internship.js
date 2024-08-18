import React, { useState } from 'react';
import Header from "../Components/Header";
import Footer from "./Footer";
import {
    Box,
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Checkbox,
    FormGroup,
    Select,
    MenuItem
} from '@mui/material';
import internshipChart from '../images/internship1.webp'; // Adjust the path if needed
import programHighlightsImage from '../images/internship1.webp'; // Adjust the path if needed


const InternshipForm = ({
    open,
    handleClose,
    handleDateChange,
    handleGenderChange,
    handleDayChange,
    handleChange,
    handleSubmit,
    gender,
    availableDays,
    dob,
    selectedValue,
    formData,
    setFormData,
    errors,
    loading
}) => (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className="dialog-title">Internship Registration</DialogTitle>
        <DialogContent className="dialog-content">
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    margin="dense"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                />
                <TextField
                    margin="dense"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                />
                <TextField
                    label="Date of Birth"
                    value={dob}
                    type="date"
                    onChange={handleDateChange}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    margin="dense"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    margin="dense"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber}
                />
                <FormControl margin="dense" fullWidth className="form-control">
                    <FormLabel className="form-control-label">Gender</FormLabel>
                    <RadioGroup row value={gender} onChange={handleGenderChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    margin="dense"
                    label="College Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.collegeName}
                    onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                    error={!!errors.collegeName}
                    helperText={errors.collegeName}
                />
                <TextField
                    margin="dense"
                    label="College Details"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.collegeDetails}
                    onChange={(e) => setFormData({ ...formData, collegeDetails: e.target.value })}
                    error={!!errors.collegeDetails}
                    helperText={errors.collegeDetails}
                />
                <TextField
                    margin="dense"
                    label="Internship Program (Subjects)"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.programSubjects}
                    onChange={(e) => setFormData({ ...formData, programSubjects: e.target.value })}
                    error={!!errors.programSubjects}
                    helperText={errors.programSubjects}
                />
                <FormControl margin="dense" fullWidth className="form-control">
                    <Select
                        labelId="internship-duration-label"
                        id="internship-duration"
                        className="select-menu"
                        value={selectedValue}
                        onChange={handleChange}
                        displayEmpty
                    >
                        <MenuItem disabled value="">
                            <em>Internship Duration</em>
                        </MenuItem>
                        <MenuItem value="15 days">15 Days</MenuItem>
                        <MenuItem value="1 month">1 Month</MenuItem>
                        <MenuItem value="2 months">2 Months</MenuItem>
                        <MenuItem value="3 months">3 Months</MenuItem>
                        <MenuItem value="6 months">6 Months</MenuItem>
                    </Select>
                </FormControl>
                {/* <TextField
                    margin="dense"
                    label="Contact Number"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    error={!!errors.contactNumber}
                    helperText={errors.contactNumber}
                />
                <TextField
                    margin="dense"
                    label="Mail Address"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.mailAddress}
                    onChange={(e) => setFormData({ ...formData, mailAddress: e.target.value })}
                    error={!!errors.mailAddress}
                    helperText={errors.mailAddress}
                /> */}
                <FormControl margin="dense" fullWidth className="form-control">
                    <FormLabel className="form-control-label">Available Days</FormLabel>
                    <FormGroup row>
                        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                            <FormControlLabel
                                key={day}
                                control={<Checkbox checked={availableDays[day]} onChange={handleDayChange} name={day} />}
                                label={day.charAt(0).toUpperCase() + day.slice(1)}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                </DialogActions>
            </form>
        </DialogContent>
    </Dialog>
);

const Internship = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        collegeName: '',
        collegeDetails: '',
        programSubjects: '',
        contactNumber: '',
        mailAddress: '',
    });
    const [gender, setGender] = useState('');
    const [availableDays, setAvailableDays] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
    });
    const [dob, setDob] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false); // Added state for tracking submission status
    const [successDialogOpen, setSuccessDialogOpen] = useState(false);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleDayChange = (event) => {
        setAvailableDays({
            ...availableDays,
            [event.target.name]: event.target.checked,
        });
    };

    const handleDateChange = (event) => {
        setDob(event.target.value);
    };

    const handleSuccessDialogClose = () => {
        setSuccessDialogOpen(false);
    };

    // Component for the Success Dialog
    const SuccessDialog = ({ open, handleClose }) => (
        <Dialog open={open} onClose={handleClose} aria-labelledby="success-dialog-title">
            <DialogTitle id="success-dialog-title">Success</DialogTitle>
            <DialogContent>
                <Typography>Your application has been submitted successfully!</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
        if (!formData.collegeName) newErrors.collegeName = 'College Name is required';
        if (!formData.collegeDetails) newErrors.collegeDetails = 'College Details are required';
        if (!formData.programSubjects) newErrors.programSubjects = 'Internship Program (Subjects) is required';
        if (!formData.contactNumber) newErrors.contactNumber = 'Contact Number is required';
        if (!formData.mailAddress) newErrors.mailAddress = 'Mail Address is required';
        if (!gender) newErrors.gender = 'Gender is required';
        if (!dob) newErrors.dob = 'Date of Birth is required';
        if (!selectedValue) newErrors.selectedValue = 'Internship Duration is required';
        return newErrors;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('https://saigubs.netlify.app/.netlify/functions/internship-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    gender,
                    dob,
                    internshipDuration: selectedValue,
                    availableDays,
                }),
            });

            if (!response.ok) {
                const errorData = await response.text(); // Get response body for error details
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}. Details: ${errorData}`);
            }
            setSubmitted(true);
            setSuccessDialogOpen(true);
            handleClose();
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                collegeName: '',
                collegeDetails: '',
                programSubjects: '',
                contactNumber: '',
                mailAddress: '',
            });
        } catch (error) {
            console.error('Error:', error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <Header />
            <div className="hero-text">
                <h1 variant="h4" className="hero-subtitle">
                    Welcome to GLOBAL SG TECH
                </h1>
                <h2 variant="body1" className="hero-body">
                    We are dedicated to driving technological advancements and shaping future tech leaders through our immersive internship program.
                </h2>
            </div>
            <div className='cloudsolutions'>
                <div className='cloudimg'>
                    <img src={internshipChart} alt='Cloud Solutions' />
                </div>
                <div className='cloudcontent'>
                    <Typography variant="h5" className="program-highlights-title">Program Highlights:</Typography>
                    <ul className="program-highlights-list">
                        <li><strong>Internship Durations:</strong> 6 days to 6 months based on student performance</li>
                        <li><strong>Training Hours:</strong> 3 hours per day</li>
                        <li><strong>Software and Tools:</strong> Guidance on installation provided</li>
                        <li><strong>Internship Report:</strong> Assistance with report creation</li>
                        <li><strong>Global SG Tech:</strong> Recognized as a leading internship provider in Chennai for college students and job-seeking professionals. After 6 months of regular paid internship, it becomes free. The best interns may also receive job offers.</li>
                        <li><strong>Certificates:</strong> 'Internship Certificate' and 'In-Plant Training Certificate'</li>
                    </ul>
                    <div>
                        <Button variant="contained" className="apply-button" onClick={handleClickOpen}>
                            Apply Now
                        </Button>
                    </div>
                    <InternshipForm
                        open={open}
                        handleClose={handleClose}
                        handleDateChange={handleDateChange}
                        handleGenderChange={handleGenderChange}
                        handleDayChange={handleDayChange}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        gender={gender}
                        availableDays={availableDays}
                        dob={dob}
                        selectedValue={selectedValue}
                        formData={formData}
                        setFormData={setFormData}
                        errors={errors}
                        loading={loading}
                    />
                    <SuccessDialog open={successDialogOpen} handleClose={handleSuccessDialogClose} />
                </div>
            </div>
            <Typography variant="body1" className="hero-body">
                <strong>Transformative Experience:</strong> Our program is crafted to immerse you in real-world projects, provide unmatched mentorship, and equip you with the skills needed to excel in dynamic tech environments.
            </Typography>
            <Typography variant="body1" className="hero-body">
                <strong>Explore Opportunities:</strong> Whether your passion lies in cutting-edge Software Development, innovative Web Development, data-driven Data Science, or other tech domains, our internship program is your gateway to achieving excellence.
            </Typography>
            <Typography variant="body1" className="hero-body">
                <strong>100% Practical Classes:</strong> Our internship is designed for hands-on, practical experience, ensuring you gain directly applicable skills.
            </Typography>
            <Typography variant="body1" className="hero-body">
                <strong>Syllabus:</strong> The comprehensive syllabus covers essential aspects of your chosen tech field, preparing you for a successful career.
            </Typography>
            <Box>
                <Typography variant="h4" className="details-title">Internship Details</Typography>
                <table className="details-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Internship Focus</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Machine Learning Using Python</td>
                            <td>Hands-on experience with machine learning algorithms and projects using Python.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Web Designing</td>
                            <td>Comprehensive training in web design principles, tools, and best practices.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cloud Computing</td>
                            <td>Training in cloud services, including AWS and Azure, and practical cloud service applications.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Networking Automation</td>
                            <td>Introduction to network automation techniques and tools for efficient network management.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>MySQL</td>
                            <td>Practical sessions on MySQL database management, querying, and optimization.</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Mobile Development</td>
                            <td>Training in mobile app development for both Android and iOS platforms.</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Data Engineering</td>
                            <td>Skills and knowledge for data pipeline creation, data integration, and management.</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Data Analysis</td>
                            <td>Techniques and tools for analyzing and interpreting data to make informed decisions.</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
            <Footer />
        </>
    );
};

export default Internship;

