const { Pool } = require('pg');
const cors = require('cors');

const pool = new Pool({
    user: 'tamilarasi',
    host: 'localhost',
    database: 'internship',
    password: 'test123',
    port: 5432,
});

// Netlify function handler
exports.handler = async (event) => {
    // Enable CORS
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
            const { name, email, mobile, message } = JSON.parse(event.body);

            // Basic validation
            if (!name || !email || !mobile || !message) {
                return {
                    statusCode: 400,
                    headers: corsHeaders,
                    body: JSON.stringify({ message: 'All fields are required' }),
                };
            }

            // Insert data into the database
            await pool.query(
                'INSERT INTO contact_form(name, email, mobile, message) VALUES($1, $2, $3, $4)',
                [name, email, mobile, message]
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
