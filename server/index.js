const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const Contact = require('./models/Contact');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ── Nodemailer Transporter ──────────────────────────────────────────
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// ── Helper: send notification email ────────────────────────────────
const sendContactEmail = async ({ name, email, phone, subject, message }) => {
    const timestamp = new Date().toLocaleString();
    const uniqueId = Math.random().toString(36).substring(7);

    console.log(`[${timestamp}] Processing email for: ${name} (${email})`);
    console.log(`[${timestamp}] Data payload:`, { name, email, phone, subject, message });

    const mailOptions = {
        from: `"BrownSofts Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: `📩 [${uniqueId}] New Contact Message: ${subject || 'No Subject'}`,
        text: `
New Contact Form Submission
---------------------------
Date: ${timestamp}
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Subject: ${subject || 'N/A'}

Message:
${message}
---------------------------
Sent from BrownSofts Contact Form.
        `,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                <div style="background: #2563eb; padding: 24px; text-align: center;">
                    <h1 style="color: #fff; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
                    <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0;">BrownSofts IT Services</p>
                    <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 12px;">Ref ID: ${uniqueId} | ${timestamp}</p>
                </div>
                <div style="padding: 30px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 120px;">Name</td>
                            <td style="padding: 10px 0; color: #1e293b; font-weight: 600;">${name}</td>
                        </tr>
                        <tr style="border-top: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Email</td>
                            <td style="padding: 10px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
                        </tr>
                        <tr style="border-top: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Phone</td>
                            <td style="padding: 10px 0; color: #1e293b;">${phone || '—'}</td>
                        </tr>
                        <tr style="border-top: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Subject</td>
                            <td style="padding: 10px 0; color: #1e293b;">${subject || '—'}</td>
                        </tr>
                        <tr style="border-top: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; color: #64748b; font-size: 14px; vertical-align: top;">Message</td>
                            <td style="padding: 10px 0; color: #1e293b; line-height: 1.6;">${message}</td>
                        </tr>
                    </table>
                </div>
                <div style="background: #f8fafc; padding: 16px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                    <p style="margin: 0; color: #94a3b8; font-size: 12px;">This email was sent from the BrownSofts contact form.</p>
                </div>
            </div>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[${timestamp}] Email delivered:`, info.messageId);
};

// Routes
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields' });
        }

        // Save to database
        const newContact = new Contact({ name, email, phone, subject, message });
        await newContact.save();

        // Send email notification (non-blocking — don't fail submission if email fails)
        sendContactEmail({ name, email, phone, subject, message })
            .then(() => console.log('Email notification sent successfully'))
            .catch(err => console.error('Email sending failed (submission still saved):', err.message));

        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ success: false, message: 'Server error, please try again later' });
    }
});

app.get('/api/contact', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: contacts.length, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Database connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
