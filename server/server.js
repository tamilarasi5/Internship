const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000; // Change the port if needed

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// PostgreSQL client setup
const pool = new Pool({
    user: 'tamilarasi',
    host: 'localhost',
    database: 'internship',
    password: 'test123',
    port: 5432,
});

// Route to handle form submissions
app.post('/submit-form', async (req, res) => {
    const { name, email, mobile, message } = req.body;

    // Basic validation
    if (!name || !email || !mobile || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Insert data into the database
        await pool.query(
            'INSERT INTO contact_form(name, email, mobile, message) VALUES($1, $2, $3, $4)',
            [name, email, mobile, message]
        );
        res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Error saving data' });
    }
});



//Inteernship form 
app.post('/api/internship-form', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, collegeName, collegeDetails, programSubjects, contactNumber, mailAddress, gender, dob, internshipDuration, availableDays } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !phoneNumber || !collegeName || !collegeDetails || !programSubjects || !contactNumber || !mailAddress || !gender || !dob || !internshipDuration) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Insert data into the database
        await pool.query(
            `INSERT INTO internship_form (first_name, last_name, email, phone_number, college_name, college_details, program_subjects, contact_number, mail_address, gender, dob, internship_duration, available_days) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
            [firstName, lastName, email, phoneNumber, collegeName, collegeDetails, programSubjects, contactNumber, mailAddress, gender, dob, internshipDuration, JSON.stringify(availableDays)]
        );
        res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Error saving data' });
    }
});



// Endpoint to handle form submissions
app.post('/api/student-form', async (req, res) => {
    const {
      studentName,
      parentName,
      email,
      phone,
      dob,
      startDate,
      schedule,
      teacher,
      time,
      program,
    } = req.body;
  
    try {
      await pool.query(
        'INSERT INTO student_form (student_name, parent_name, email, phone, dob, start_date, schedule, teacher, time, program) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        [studentName, parentName, email, phone, dob, startDate, schedule, teacher, time, program]
      );
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Error submitting form' });
    }
  });

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
