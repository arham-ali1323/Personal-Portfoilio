# Email Integration Setup - Resend API

This document explains how to set up the Resend API integration for the contact form.

## Prerequisites

1. **Resend Account**: Sign up at [https://resend.com](https://resend.com)
2. **Verified Domain**: Verify your sending domain in Resend dashboard
3. **API Key**: Get your Resend API key from the dashboard

## Setup Instructions

### 1. Configure Resend API Key

Open `server.js` and replace the placeholder API key:

```javascript
const resend = new Resend('re_your_actual_api_key_here');
```

### 2. Configure Sending Domain

Update the `from` field in `server.js` to use your verified domain:

```javascript
from: 'Portfolio Contact <your-verified-domain@resend.dev>',
```

### 3. Update Recipient Email

Make sure your email address is correct in the `to` field:

```javascript
to: ['arham.ali1323@gmail.com'], // Your email address
```

## Running the Application

### Option 1: Development Mode (Recommended)

Run both the frontend and backend concurrently:

```bash
npm run dev:full
```

This will start:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

### Option 2: Manual Setup

Run server and frontend separately:

**Terminal 1 - Start Backend Server:**
```bash
npm run server
```

**Terminal 2 - Start Frontend:**
```bash
npm run dev
```

## How It Works

1. **Frontend**: Contact form submits to `http://localhost:3001/api/send-email`
2. **Backend**: Express server receives the request and validates the data
3. **Resend**: Backend uses Resend API to send a formatted HTML email
4. **Email**: You receive the email with the contact form submission

## Features

- ✅ Input validation (name, email, message)
- ✅ Email format validation
- ✅ Professional HTML email template
- ✅ Error handling and user feedback
- ✅ Loading states and success/error messages
- ✅ Form reset after successful submission

## Testing the Contact Form

1. Start the application with `npm run dev:full`
2. Navigate to the contact section
3. Fill out the form with valid information
4. Click "Send Message"
5. Check your email for the submission

## Deployment Considerations

For production deployment:

1. **Environment Variables**: Store API key in environment variables
2. **CORS**: Update CORS configuration for your production domain
3. **Domain Verification**: Ensure your sending domain is verified with Resend
4. **Rate Limiting**: Consider implementing rate limiting for the contact endpoint

## Environment Variables (Production)

Create a `.env` file in your project root:

```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=your-verified-domain@resend.dev
TO_EMAIL=your-email@example.com
PORT=3001
```

Update `server.js` to use environment variables:

```javascript
const resend = new Resend(process.env.RESEND_API_KEY);
const PORT = process.env.PORT || 3001;
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure the backend server is running and CORS is configured
2. **Email Not Sending**: Check your Resend API key and domain verification
3. **Connection Refused**: Make sure the backend server is running on port 3001

### Debug Mode

Add console logging to debug issues:

```javascript
console.log('Form data received:', req.body);
console.log('Resend response:', { data, error });
```

## Security Notes

- ✅ API key is stored on the server (not exposed to frontend)
- ✅ Input validation prevents malformed requests
- ✅ CORS configured for specific origins
- ⚠️ Consider implementing rate limiting for production
- ⚠️ Add spam protection if needed

## Support

If you encounter issues:

1. Check the browser console for frontend errors
2. Check the terminal for backend server logs
3. Verify your Resend dashboard for API usage
4. Ensure all configuration values are correct

For more information about Resend, visit: [https://resend.com/docs](https://resend.com/docs)
