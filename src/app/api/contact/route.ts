import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, service, plan, budget, message } = body

        // Validate required fields
        if (!name || !email || !service || !plan || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // If plan is enterprise, budget is required
        if (plan === 'enterprise' && !budget) {
            return NextResponse.json(
                { error: 'Budget is required for Enterprise plan' },
                { status: 400 }
            )
        }

        // Prepare email content
        const emailContent = `
New Contact Form Submission from LuminoidX Website

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Interest: ${service}
Plan: ${plan}
${plan === 'enterprise' ? `Budget: ${budget}` : ''}

Message:
${message}

---
This email was sent from the LuminoidX contact form.
    `.trim()

        // For now, we'll use Resend API (you'll need to set this up)
        // You can also use SendGrid, Nodemailer, or any other email service

        const RESEND_API_KEY = process.env.RESEND_API_KEY

        if (!RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured')
            // Log the form data for manual follow-up
            console.log('Form submission:', { name, email, phone, service, plan, budget, message })

            return NextResponse.json(
                { error: 'Email service not configured. Please contact us directly at hello@luminoidx.com' },
                { status: 500 }
            )
        }

        // Send email using Resend
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'LuminoidX Contact Form <onboarding@resend.dev>', // You'll need to verify your domain
                to: ['qaimmehdi2017@gmail.com'],
                reply_to: email,
                subject: `New Contact Form Submission from ${name}`,
                text: emailContent,
            }),
        })

        if (!response.ok) {
            const error = await response.text()
            console.error('Resend API error:', error)
            throw new Error('Failed to send email')
        }

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Failed to send message. Please try again or contact us directly at hello@luminoidx.com' },
            { status: 500 }
        )
    }
}
