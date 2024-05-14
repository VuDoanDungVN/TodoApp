import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { Email } from '@prisma/client';
import { MailerRepository } from '@/app/_repositories/mailer';

export async function POST(request: NextRequest) {
  try {
    const emails: Email = await request.json();
    const createEmail = await MailerRepository.create(emails);

    // Configure transporter with environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      port: 465,
      secure: true, // Use SSL/TLS
    });

    const mailOptions = {
      from: createEmail.from,
      to: process.env.EMAIL_ADDRESSES || createEmail.to,
      subject: createEmail.subject,
      text: createEmail.content,
    };

    // Send email and await the result
    const info = await transporter.sendMail(mailOptions);
    console.log(info);

    return NextResponse.json(createEmail);
  } catch (e) {
    console.error('Error:', e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
