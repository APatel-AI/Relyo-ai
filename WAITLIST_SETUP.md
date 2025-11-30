# Waitlist Setup Instructions

Your waitlist feature is now fully implemented! Follow these steps to get it working:

## What's Been Set Up

✅ Form handling in Hero component with email validation
✅ Serverless API endpoint at `/api/waitlist`
✅ Email notifications using Resend API
✅ Loading states and success/error messages
✅ Environment configuration files

## Setup Steps

### 1. Get a Resend API Key

Resend is a modern email API with a generous free tier (100 emails/day, 3,000/month).

1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Create a free account
3. Navigate to **API Keys** in the dashboard
4. Click **Create API Key**
5. Copy your API key (starts with `re_`)

### 2. Configure Environment Variables

1. Open the `.env.local` file in the root directory
2. Replace the placeholder values:

```env
# Resend API Key from step 1
RESEND_API_KEY=re_your_actual_api_key_here

# Your email address to receive waitlist notifications
NOTIFICATION_EMAIL=your-actual-email@example.com
```

### 3. Deploy to Vercel

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Click **Import Project**
4. Select your repository
5. In the deployment settings, add your environment variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `NOTIFICATION_EMAIL`: Your email address
6. Click **Deploy**

### 4. Test Locally (Optional)

To test locally before deploying:

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel dev` in your project directory
3. Open the local URL (usually `http://localhost:3000`)
4. Test the waitlist form

## How It Works

1. User enters their email in the Hero section
2. Frontend validates the email format
3. Email is sent to `/api/waitlist` serverless function
4. Function sends you a notification email via Resend
5. User sees success message

## Email Notifications

You'll receive an email like this for each signup:

**Subject:** New Waitlist Signup - Relyo AI

**Body:**
- User's email address
- Timestamp of signup
- Formatted notification

## Customization

### Change Email Template

Edit `/api/waitlist.ts` and modify the `html` field (around line 53) to customize the email you receive.

### Change Success Message

Edit `/src/components/Hero.tsx` line 35 to customize the message users see after signing up.

### Add Confirmation Email to User

To send a confirmation email to users who sign up, add another email send in `/api/waitlist.ts`:

```typescript
// Send confirmation to user
await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${resendApiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: 'Relyo <onboarding@resend.dev>',
    to: [email],
    subject: 'Welcome to Relyo Waitlist!',
    html: `<p>Thanks for joining our waitlist...</p>`,
  }),
});
```

## Troubleshooting

### "Email service not configured" error
- Make sure `RESEND_API_KEY` is set in Vercel's environment variables
- Redeploy after adding environment variables

### Not receiving emails
- Check your spam folder
- Verify `NOTIFICATION_EMAIL` is correct
- Check Resend dashboard for delivery logs

### Form not submitting
- Check browser console for errors
- Verify the API route is accessible at `/api/waitlist`
- Make sure the app is deployed (doesn't work in development without Vercel CLI)

## Next Steps

Consider adding:
- Store emails in a database (Supabase, PlanetScale, etc.)
- Export waitlist to CSV
- Send batch emails to all waitlist members
- Add unsubscribe functionality
- Prevent duplicate signups

---

Need help? Check the Resend documentation at [https://resend.com/docs](https://resend.com/docs)
