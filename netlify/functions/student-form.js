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
                studentName,
                parentName,
                email,
                phone,
                dob,
                startDate,
                schedule,
                teacher,
                time,
                program
            } = JSON.parse(event.body);

            await pool.query(
                'INSERT INTO student_form (student_name, parent_name, email, phone, dob, start_date, schedule, teacher, time, program) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
                [studentName, parentName, email, phone, dob, startDate, schedule, teacher, time, program]
            );

            return {
                statusCode: 200,
                headers: corsHeaders,
                body: JSON.stringify({ message: 'Form submitted successfully' }),
            };
        } catch (error) {
            console.error('Error inserting data:', error);
            return {
                statusCode: 500,
                headers: corsHeaders,
                body: JSON.stringify({ message: 'Error submitting form' }),
            };
        }
    }
};
