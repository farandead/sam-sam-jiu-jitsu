const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // For security, we'll store email credentials in .env

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint to handle email sending
app.post('/send-email', async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    // Create a Nodemailer transporter object with your email credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other services as well
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS, // Your email password (use App Password for Gmail)
        },
    });

    // Setup email data
    const mailOptions = {
        from: email, // Sender's email address
        to: 'owner-email@example.com', // Owner's email address
        subject: 'New Contact Us Message',
        text: `You have a new message from ${firstName} ${lastName} (${email}):\n\n${message}`,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
