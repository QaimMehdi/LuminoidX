# Email Setup Guide for Contact Form

## Overview
The contact form is now configured to send emails to `hello@luminoidx.com` when someone submits the form.

## Setup Required

### Option 1: Using Resend (Recommended - Free tier available)

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Create a free account
   - Free tier includes 100 emails/day and 3,000 emails/month

2. **Get your API Key**
   - Go to API Keys in your Resend dashboard
   - Create a new API key
   - Copy the API key

3. **Add API Key to your project**
   - Create a `.env.local` file in the root of your project (if it doesn't exist)
   - Add this line:
     ```
     RESEND_API_KEY=your_api_key_here
     ```
   - Replace `your_api_key_here` with your actual API key

4. **Verify your domain (Optional but recommended)**
   - In Resend dashboard, go to Domains
   - Add your domain (e.g., luminoidx.com)
   - Follow the DNS setup instructions
   - Once verified, update the `from` field in `src/app/api/contact/route.ts`:
     ```typescript
     from: 'Contact Form <noreply@luminoidx.com>',
     ```

5. **Restart your dev server**
   ```bash
   npm run dev
   ```

### Option 2: Using SendGrid

If you prefer SendGrid instead:

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Install the SendGrid package:
   ```bash
   npm install @sendgrid/mail
   ```
4. Update the API route to use SendGrid instead of Resend

### Option 3: Using Gmail SMTP (For testing only)

For local testing, you can use Nodemailer with Gmail:

1. Install nodemailer:
   ```bash
   npm install nodemailer
   ```
2. Update the API route to use Nodemailer
3. Add Gmail credentials to `.env.local`

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check `hello@luminoidx.com` for the email
4. If email doesn't arrive, check:
   - Browser console for errors
   - Terminal/server logs for errors
   - Spam folder

## Current Form Fields

The form now includes:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Service Interest** (required) - AI Automation, Web Development, Full Service, Consultation
- **Plan** (required) - Starter ($800), Professional ($1,500), Enterprise (Custom)
- **Budget** (required only for Enterprise plan) - Text field for custom budget
- **Message** (required)

## What Happens When Form is Submitted

1. Form data is validated on the client side
2. Data is sent to `/api/contact` endpoint
3. Server validates the data again
4. Email is sent to `hello@luminoidx.com` with all form details
5. User sees success message
6. Form is reset

## Fallback Behavior

If the email service is not configured (no API key), the form will:
- Log the submission to the server console
- Show an error message to the user
- Ask them to email directly to `hello@luminoidx.com`

This ensures you don't lose any leads even if the email service isn't set up yet.
