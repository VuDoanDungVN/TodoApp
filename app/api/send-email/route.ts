import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { Email } from '@prisma/client';
import { MailerRepository } from '@/app/_repositories/mailer';

export async function POST(request: NextRequest) {
  try {
    // Đoạn code này sẽ lấy dữ liệu từ request và tạo một email mới trong database
    const emails: Email = await request.json();
    const createEmail = await MailerRepository.create(emails);

    console.log('Sending email:', createEmail);
    // Đoạn code này sẽ gửi email thông qua nodemailer và trả về kết quả
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      port: 465,
      secure: true, // Use SSL/TLS
    });

    // YouTube video ID
    // const youtubeVideoId = 'GPrvnhgcuCQ';
    // const youtubeThumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/0.jpg`;
    // const youtubeVideoUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;
    const CC = process.env.EMAIL_CC_ADDRESSES || '';
    const To = process.env.EMAIL_ADDRESSES || createEmail.to;
    const BCC = process.env.EMAIL_BCC_ADDRESSES || '';
    // Tạo nội dung email
    const body = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2e6c80;">Xin chào!</h2>
        <p>Đã có bài viết mới trên website của chúng tôi, bạn hãy tham khảo nhé.</p>
        <p>Chúng tôi cung cấp toàn bộ các dữ liệu hoàn toàn miễn phí, bạn có thể download nó nếu bạn muốn 1 cách dễ dàng.</p>
        <h3 style="color: #2e6c80;">Dưới đây là tóm tắt nội dung của bài viết này:</h3>
        <p><strong>${createEmail.subject}</strong></p>
        <p>${createEmail.content}</p>
        <a href="https://blender3dvn.com/tao-game-hanh-dong-2d-voi-unreal-engine-5/" target="_blank" style="display: block; width: 100%; text-align: left; margin: 20px 0;">
          <img src="https://blender3dvn.com/wp-content/uploads/2024/05/maxresdefault-800x450.jpg" alt="YouTube Video" style="width: 100%; max-width: 600px; height: auto;">
        </a>
        <hr style="border: 0; border-top: 1px solid #ccc;">
        <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!</p>
        <p>Chúc bạn một ngày tốt lành!</p>
        <p>Trân trọng!</p>
        <p><em>Học viện Blender Team</em></p>
      </div>
    `;
    // <p><strong>${createEmail.subject}</strong></p>
    // <p>${createEmail.content}</p>
    // <a href="${youtubeVideoUrl}" target="_blank" style="display: block; width: 100%; text-align: center; margin: 20px 0;">
    //   <img src="${youtubeThumbnailUrl}" alt="YouTube Video" style="width: 100%; max-width: 600px; height: auto;">
    // </a>

    // Tạo thông tin email
    const mailOptions = {
      from: createEmail.from,
      to: To, // Địa chỉ email nhận
      cc: CC,
      bcc: BCC,
      subject: createEmail.subject,
      html: body,
    };

    // Gửi email và trả về kết quả
    const info = await transporter.sendMail(mailOptions);
    console.log(info);

    return NextResponse.json(createEmail);
  } catch (e) {
    console.error('Error:', e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

//Đơn giản bạn chỉ cần có một tài khoản gmail và cấu hình 2 biến môi trường EMAIL_USER và EMAIL_PASS trong file .env
// Link tạo tài khoản gmail:
