// This file is no longer needed - using backend server approach
// The API key should only be on the server for security

export const sendEmail = async (formData) => {
  try {
    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: 'Failed to send email. Please try again later.' };
  }
};
