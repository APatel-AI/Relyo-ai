import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Get the Resend API key from environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    if (!notificationEmail) {
      console.error('NOTIFICATION_EMAIL is not configured');
      return res.status(500).json({ error: 'Notification email not configured' });
    }

    // Send notification email to owner
    const notificationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Relyo Waitlist <onboarding@resend.dev>',
        to: [notificationEmail],
        subject: 'New Waitlist Signup - Relyo AI',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000;">New Waitlist Signup!</h2>
            <p>Someone just joined your Relyo AI waitlist:</p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <strong>Email:</strong> ${email}
            </div>
            <p style="color: #666; font-size: 14px;">
              Signed up on: ${new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
          </div>
        `,
      }),
    });

    const notificationData = await notificationResponse.json();

    if (!notificationResponse.ok) {
      console.error('Resend API error:', notificationData);
      return res.status(500).json({ error: 'Failed to send notification' });
    }

    // Send confirmation email to the user
    const confirmationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Relyo Team <onboarding@resend.dev>',
        to: [email],
        subject: 'Welcome to Relyo - You\'re on the waitlist! 🎉',
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #000; font-size: 32px; margin-bottom: 10px;">Welcome to Relyo!</h1>
              <p style="color: #8E8E8E; font-size: 18px; margin: 0;">Your life. Organized. Together.</p>
            </div>

            <div style="background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #E5E5E5;">
              <h2 style="color: #000; font-size: 24px; margin-top: 0;">Thank you for joining our waitlist! 🙌</h2>
              <p style="color: #2C2C2C; font-size: 16px; line-height: 1.6;">
                We're thrilled to have you on board as we prepare to launch Relyo. You're now part of an exclusive group who will be the first to experience a smarter way to manage your family's life.
              </p>
            </div>

            <div style="margin-bottom: 30px;">
              <h3 style="color: #000; font-size: 20px; margin-bottom: 15px;">What's next?</h3>
              <ul style="color: #2C2C2C; font-size: 16px; line-height: 1.8; padding-left: 20px;">
                <li>We'll keep you updated on our progress</li>
                <li>You'll be among the first to get early access when we launch</li>
                <li>Get exclusive insights into new features as we build them</li>
              </ul>
            </div>

            <div style="background-color: #000; color: #fff; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
              <p style="margin: 0; font-size: 16px;">
                Have questions or feedback? We'd love to hear from you!<br/>
                <a href="mailto:${notificationEmail}" style="color: #fff; text-decoration: underline;">Reply to this email</a>
              </p>
            </div>

            <div style="text-align: center; color: #8E8E8E; font-size: 14px; padding-top: 20px; border-top: 1px solid #E5E5E5;">
              <p style="margin: 5px 0;">Relyo - Track responsibilities, remember dates, manage tasks</p>
              <p style="margin: 5px 0;">All in one place, for your whole family</p>
            </div>
          </div>
        `,
      }),
    });

    const confirmationData = await confirmationResponse.json();

    if (!confirmationResponse.ok) {
      console.error('Failed to send confirmation email:', confirmationData);
      // Don't fail the entire request if confirmation email fails
      // The user is still added to the waitlist
    }

    return res.status(200).json({
      success: true,
      message: 'Successfully joined the waitlist',
    });
  } catch (error) {
    console.error('Error processing waitlist signup:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
