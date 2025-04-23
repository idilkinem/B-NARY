import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // E-posta doğrulama
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    // E-posta gönderme işlemi
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'nisapaydin004@gmail.com',
        pass: 'erfo gqfw rhrz zqkx'
      }
    });

    const mailOptions = {
      from: 'nisapaydin004@gmail.com',
      to: 'nisapaydin004@gmail.com',
      subject: 'Yeni Bülten Aboneliği',
      html: `
        <h2>Yeni Bülten Aboneliği Bildirimi</h2>
        <p><strong>Yeni Abone:</strong> ${email}</p>
        <p>Kullanıcı başarıyla bülten aboneliğine kaydoldu.</p>
      `
    };

    await transporter.sendMail(mailOptions);

    // TODO: E-postayı veritabanına kaydet
    // Örnek: await db.insert({ email, subscribedAt: new Date() }).into('subscribers');
    
    // Başarılı yanıt
    return NextResponse.json(
      { message: 'Abone olduğunuz için teşekkür ederiz!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Abonelik hatası:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
} 