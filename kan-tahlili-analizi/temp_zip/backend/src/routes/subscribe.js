const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    // E-posta doğrulama
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Geçerli bir e-posta adresi giriniz.' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
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
    
    res.json({ message: 'Abone olduğunuz için teşekkür ederiz!' });
  } catch (error) {
    console.error('Abonelik hatası:', error);
    res.status(500).json({ error: 'Bir hata oluştu. Lütfen tekrar deneyin.' });
  }
});

module.exports = router; 