import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const body = await request.json()

        const {
            businessName,
            yourName,
            email,
            phone,
            projectType,
            numberOfPages,
            hasContent,
            goals,
            budgetRange,
            timeline,
            referralSource,
            notes,
        } = body

        if (!businessName || !yourName || !email) {
            return NextResponse.json(
                { error: 'Business name, your name, and email are required.' },
                { status: 400 }
            )
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address.' },
                { status: 400 }
            )
        }

        const goalsFormatted = Array.isArray(goals) ? goals.join(', ') : goals || 'Not specified'

        const notificationHtml = `
            <h2>New Project Inquiry from ${yourName}</h2>
            <hr />
            <h3>About the Client</h3>
            <ul>
                <li><strong>Business Name:</strong> ${businessName}</li>
                <li><strong>Contact Name:</strong> ${yourName}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
            </ul>
            <h3>Project Details</h3>
            <ul>
                <li><strong>Project Type:</strong> ${projectType || 'Not specified'}</li>
                <li><strong>Number of Pages:</strong> ${numberOfPages || 'Not specified'}</li>
                <li><strong>Has Existing Content:</strong> ${hasContent || 'Not specified'}</li>
                <li><strong>Key Goals:</strong> ${goalsFormatted}</li>
            </ul>
            <h3>Budget &amp; Timeline</h3>
            <ul>
                <li><strong>Budget Range:</strong> ${budgetRange || 'Not specified'}</li>
                <li><strong>Timeline:</strong> ${timeline || 'Not specified'}</li>
                <li><strong>How They Found Us:</strong> ${referralSource || 'Not specified'}</li>
            </ul>
            ${notes ? `<h3>Additional Notes</h3><p>${notes}</p>` : ''}
        `

        await resend.emails.send({
            from: 'Region Systems <onboarding@resend.dev>',
            to: ['havlinconnor@gmail.com'],
            subject: `New Project Inquiry: ${businessName} — ${projectType || 'Website'}`,
            html: notificationHtml,
            replyTo: email,
        })

        await resend.emails.send({
            from: 'Region Systems <onboarding@resend.dev>',
            to: [email],
            subject: `Thanks ${yourName} — We received your project inquiry`,
            html: `
                <h2>Thanks ${yourName}!</h2>
                <p>Connor will review your project details and reply within <strong>1 business day</strong> with a clear scope and next steps.</p>
                <p>In the meantime, feel free to reply to this email with any additional details about your project.</p>
                <br />
                <p>— Connor Havlin</p>
                <p>Region Systems LLC</p>
                <p><a href="https://regionsystemsllc.com">regionsystemsllc.com</a></p>
            `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Something went wrong. Please try again or email us directly.' },
            { status: 500 }
        )
    }
}
