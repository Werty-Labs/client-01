import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

/** Escape HTML special characters to prevent injection in email body */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, destination, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const safeName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
    const safeEmail = escapeHtml(email);
    const safeDestination = destination ? escapeHtml(destination) : 'Not provided';
    const safeMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: 'Tarragon Leisure Website <noreply@tarragonleisure.com>',
      to: 'info@tarragonleisure.com',
      replyTo: email,
      subject: `New Enquiry from ${safeName}`,
      html: `
        <h2>New Contact Form Enquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Desired Destination:</strong> ${safeDestination}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
