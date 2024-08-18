import React, { useState } from 'react';
import { Container, TextField, Button, MenuItem, Typography, Grid, Box, Card, CardMedia, CardContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Components/Header';
import Footer from './Footer';
import sunset from '../images/begin.jpeg'; 
import abstract from '../images/inter2.jpeg'; 
import mountain from '../images/expert.jpeg';
import SimpleImageSlider from "react-simple-image-slider";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
const theme = createTheme();

const ArtsDrawingForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    dob: '',
    startDate: '',
    schedule: '',
    teacher: '',
    time: '', // Initialize with an empty string
  });

  const [errors, setErrors] = useState({});

  const programs = [
    'Sketching',
    'Watercolor Painting',
    'Oil Painting',
    'Digital Art',
  ];

  const schedules = [
    'Weekly',
    'Monthly',
  ];

  const teachers = [
    'Mr. Smith',
    'Ms. Johnson',
    'Mrs. Brown',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when user starts typing
  };

  const handleDateChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when user starts typing
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    // Check required fields
    const requiredFields = ['studentName', 'parentName', 'email', 'phone', 'dob', 'startDate', 'schedule', 'teacher', 'time'];
    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = 'This field is required';
        isValid = false;
      }
    });

    // Check email format
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    // Check date constraints
    const today = new Date().toISOString().split('T')[0];
    if (formData.startDate && formData.startDate < today) {
      errors.startDate = 'Start date cannot be in the past';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('https://saigubs.netlify.app/.netlify/functions/student-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          console.log(result.message);
          // Handle successful form submission (e.g., show a success message or redirect)
          alert('Form submitted successfully!');
        } else {
          console.error(result.message);
          // Handle error response
          alert('Error submitting form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle fetch error
        alert('Error submitting form');
      }
    }
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log(formData);
//       // Handle form submission (e.g., send to backend or show success message)
//     }
//   };
  const images = [
    { url: "images/stu1.jpeg" },
    { url: "images/stu2.jpeg" },
    { url: "images/stu3.jpeg" },
    { url: "images/stu4.jpeg" },


  ];
  return (
    <>
      <Header />
      <Box my={5}>
        <Typography variant="h5" gutterBottom className="header" style={{ color: '#088395', fontWeight: 'bold' }}>
          Art Gallery
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card-animation">
              <CardMedia
                component="img"
                alt="Beginners"
                height="200"
                image={sunset}
                title="Beginners"
                style={{ height: '324px' }}
              />
              <CardContent>
                <Typography variant="h6" style={{ color: '#071952' }}><b>Beginners</b></Typography>
                <Typography variant="body2">
                  Discover the basics of art with simple drawing techniques, fundamental color theory, and an introduction to various art tools. Learn to balance compositions, practice shading, and explore different art styles to build a solid foundation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card-animation">
              <CardMedia
                component="img"
                alt="Intermediate"
                height="200"
                image={abstract}
                title="Intermediate"
                style={{ height: '324px' }}
              />
              <CardContent>
                <Typography variant="h6" style={{ color: '#071952' }}><b>Intermediate</b></Typography>
                <Typography variant="body2">
                  Enhance your skills with advanced drawing techniques, in-depth color theory, and a variety of art media. Focus on complex compositions, master shading, and develop your unique artistic style while gaining a deeper understanding of art history.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card-animation">
              <CardMedia
                component="img"
                alt="Experts"
                height="200"
                image={mountain}
                title="Experts"
                style={{ height: '324px' }}
              />
              <CardContent>
                <Typography variant="h6" style={{ color: '#071952' }}><b>Experts</b></Typography>
                <Typography variant="body2">
                  Perfect your craft with mastery in drawing, painting, and color application. Delve into sophisticated techniques, create innovative compositions, and refine your personal style. Engage with contemporary art discussions and contribute to the art world with advanced projects.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box my={5} className="community-container">
        <Typography variant="h5" gutterBottom className="header" style={{ color: '#088395', fontWeight: 'bold' }}>
          Artist Community
        </Typography>
        <Typography variant="body1" gutterBottom style={{ textAlign: 'center' }}>
          Join our artist community to connect with fellow creatives, participate in discussions, and share your work. Here are some resources and upcoming events:
        </Typography>
        <ul className="community-links">
          <li><a href="https://www.artstation.com" target="_blank" rel="noopener noreferrer">ArtStation</a></li>
          <li><a href="https://www.deviantart.com" target="_blank" rel="noopener noreferrer">DeviantArt</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram Art Community</a></li>
          <li><a href="https://www.meetup.com" target="_blank" rel="noopener noreferrer">Local Art Meetups</a></li>
        </ul>
      </Box>
      <div className='cloudsolutions'style={{width:'1200px',marginLeft:'180px'}}>
            <div className='cloudimg'>
                {/* Placeholder for cloud solutions image */}
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2, backgroundColor: 'aliceblue', height: '400px', marginTop: '50px', marginLeft: '30px' }}>
      <Typography variant="h6" gutterBottom style={{ color: '#088395', fontWeight: 'bold' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" component="div">
        <h5>Have any questions? Feel free to Contact us at Anytime.</h5>
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
        <WhatsAppIcon style={{ marginLeft: '10px', color: '#039dfc' }} />
        <span style={{ color: '#039dfc', fontWeight: 'bold', marginLeft: '10px' }}>
          Contact Number: <a href="https://wa.me/919345328477" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#039dfc' }}>+91-9345328477</a>
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px', marginTop: '30px' }}>
        <HomeIcon style={{ marginLeft: '10px', color: '#039dfc' }} />
        <span style={{ color: '#039dfc', fontWeight: '400', marginLeft: '10px' }}>
          US: <a href="https://wa.me/16468649094" target="_blank" rel="noopener noreferrer" className='spanarea' style={{ textDecoration: 'none', color: '#039dfc' }}>+1-646-864-9094</a>
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px', marginTop: '10px' }}>
        <HomeIcon style={{ marginLeft: '10px', color: '#039dfc' }} />
        <span style={{ color: '#039dfc', fontWeight: '400', marginLeft: '10px' }}>
          Chennai: <a href="https://wa.me/919345328477"  target="_blank" rel="noopener noreferrer" className='spanarea' style={{ textDecoration: 'none', color: '#039dfc' }}>+91-9345328477</a>
        </span>
      </div>
      <Button
        variant="contained"
        color="success"
        href="https://wa.me/919345328477" // Replace with your main WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        fullWidth
        style={{ marginTop: '70px', backgroundColor: '#039dfc' }}
      >
        Chat on WhatsApp
      </Button>
    </Box>
            </div>
            <div className='cloudcontent'>
            <Box>
              <h3 style={{color:'red',marginTop:'5px',marginLeft:'300px'}}>Kids Drawing</h3>
            <SimpleImageSlider style={{marginTop:'10px',marginLeft:'120px'}}
                        width={600}
                        height={400}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    />
            </Box>
          </div>
        </div>
        <ThemeProvider theme={theme}>
        <div className="container">
          <Container maxWidth="md">
            <Box my={5}>
              <Typography variant="h4" gutterBottom className="header" style={{ color: '#088395', fontWeight: 'bold' }}>
                Arts Drawing Program Registration
              </Typography>
              <Typography variant="body1" gutterBottom>
                Join our arts drawing program to unleash your creativity. We offer a range of programs including sketching, watercolor painting, oil painting, and digital art. Our experienced teachers are dedicated to providing personalized instruction to help you achieve your artistic goals.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Explore some of the amazing artwork created by our students and get inspired to create your own masterpieces!
              </Typography>
              <Typography variant="h6" gutterBottom style={{ color: '#ff5722', fontWeight: 'bold', marginTop: '24px' }}>
                Special Offer first Session Free!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Sign up now and enjoy your first art session at no cost. Don’t miss this opportunity to start your creative journey with us!
              </Typography>
              <Grid container spacing={3} className="form-container">
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Student's Name"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    error={Boolean(errors.studentName)}
                    helperText={errors.studentName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Parent's Name"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    error={Boolean(errors.parentName)}
                    helperText={errors.parentName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    error={Boolean(errors.phone)}
                    helperText={errors.phone}
                    type="tel"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    name="dob"
                    value={formData.dob}
                    onChange={(e) => handleDateChange('dob', e.target.value)}
                    variant="outlined"
                    size="small"
                    required
                    error={Boolean(errors.dob)}
                    helperText={errors.dob}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Start Date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={(e) => handleDateChange('startDate', e.target.value)}
                    variant="outlined"
                    size="small"
                    required
                    error={Boolean(errors.startDate)}
                    helperText={errors.startDate}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    error={Boolean(errors.program)}
                    helperText={errors.program}
                  >
                    {programs.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Schedule"
                    name="schedule"
                    value={formData.schedule}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    error={Boolean(errors.schedule)}
                    helperText={errors.schedule}
                  >
                    {schedules.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Teacher"
                    name="teacher"
                    value={formData.teacher}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    error={Boolean(errors.teacher)}
                    helperText={errors.teacher}
                  >
                    {teachers.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Preferred Time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    error={Boolean(errors.time)}
                    helperText={errors.time}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
            </Container>
            </div>
            </ThemeProvider>
          <Box my={5}>
  <Typography variant="h5" gutterBottom className="header" style={{ color: '#088395', fontWeight: 'bold' }}>
    Drawing Video Tutorials
  </Typography>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={4}>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/oBCg0CD-TcQ"
          title="Drawing Tutorial 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/PiJkRJgjFBs"
          title="Drawing Tutorial 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/mzzvCGfKZR8"
          title="Drawing Tutorial 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Grid>
  </Grid>
</Box>

            <Box my={5} className="links-container">
              <Typography variant="h5" gutterBottom className="header" style={{color:'#088395',fontWeight:'bold'}}>
                Inspirational Drawing Links
              </Typography>
              <ul className="links-list">
                <li><a href="https://www.google.com/search?q=sketching+art&tbm=isch" target="_blank" rel="noopener noreferrer">Sketching Art</a></li>
                <li><a href="https://www.google.com/search?q=watercolor+painting&tbm=isch" target="_blank" rel="noopener noreferrer">Watercolor Painting</a></li>
                <li><a href="https://www.google.com/search?q=oil+painting&tbm=isch" target="_blank" rel="noopener noreferrer">Oil Painting</a></li>
                <li><a href="https://www.google.com/search?q=digital+art&tbm=isch" target="_blank" rel="noopener noreferrer">Digital Art</a></li>
              </ul>
            </Box>
      <Footer />
    </>
  );
};

export default ArtsDrawingForm;