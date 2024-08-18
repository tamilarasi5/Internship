const { Pool } = require('pg');

const pool = new Pool({
    user: 'tamilarasi',
    host: 'localhost',
    database: 'internship',
    password: 'test123',
    port: 5432,
});

// Netlify function handler
exports.handler = async (event) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: corsHeaders,
        };
    }

    if (event.httpMethod === 'POST') {
        try {
            const {
                firstName,
                lastName,
                email,
                phoneNumber,
                collegeName,
                collegeDetails,
                programSubjects,
                contactNumber,
                mailAddress,
                gender,
                dob,
                internshipDuration,
                availableDays
            } = JSON.parse(event.body);

            if (!firstName || !lastName || !email || !phoneNumber || !collegeName || !collegeDetails || !programSubjects || !contactNumber || !mailAddress || !gender || !dob || !internshipDuration) {
                return {
                    statusCode: 400,
                    headers: corsHeaders,
                    body: JSON.stringify({ message: 'All fields are required' }),
                };
            }

            await pool.query(
                `INSERT INTO internship_form (first_name, last_name, email, phone_number, college_name, college_details, program_subjects, contact_number, mail_address, gender, dob, internship_duration, available_days) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
                [firstName, lastName, email, phoneNumber, collegeName, collegeDetails, programSubjects, contactNumber, mailAddress, gender, dob, internshipDuration, JSON.stringify(availableDays)]
            );

            return {
                statusCode: 200,
                headers: corsHeaders,
                body: JSON.stringify({ message: 'Data saved successfully' }),
            };
        } catch (error) {
            console.error('Error saving data:', error);
            return {
                statusCode: 500,
                headers: corsHeaders,
                body: JSON.stringify({ message: 'Error saving data' }),
            };
        }
    }
};
