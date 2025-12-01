import { Resend } from 'resend';

const resend = new Resend('YOUR_VALID_RESEND_API_KEY_HERE');

async function testResend() {
  try {
    console.log('Testing Resend API...');
    
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['arham.ali1323@gmail.com'],
      subject: 'Test Email from Portfolio',
      html: '<p>This is a test email to verify the Resend API is working.</p>',
    });

    if (error) {
      console.error('Error:', JSON.stringify(error, null, 2));
    } else {
      console.log('Success:', data);
    }
  } catch (err) {
    console.error('Exception:', err);
  }
}

testResend();
