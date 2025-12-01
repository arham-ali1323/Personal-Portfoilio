import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend with your API key
const resend = new Resend('re_aGx39onL_HkWmrHKZ93ykydda9oK7HY2M'); // Your actual Resend API key

// Contact form endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    console.log('Received request:', req.body);
    
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      console.log('Validation failed: missing fields');
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: invalid email format');
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    console.log('Validation passed, sending email...');

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Using default Resend domain for testing
      to: ['arham.ali1323@gmail.com'],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #555; margin-bottom: 5px;">From:</h3>
              <p style="color: #333; margin: 0;">
                <strong>${name}</strong> &lt;${email}&gt;
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                <p style="color: #333; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                This message was sent from your portfolio contact form.
              </p>
              <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">
                Sent on: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log('Resend response:', { data, error });

    if (error) {
      console.error('Resend API Error:', JSON.stringify(error, null, 2));
      return res.status(500).json({
        success: false,
        error: 'Failed to send email. Please try again later.',
        details: error.message
      });
    }

    console.log('Email sent successfully!');
    res.json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
