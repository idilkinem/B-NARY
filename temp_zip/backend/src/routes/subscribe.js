const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const db = require('../config/db');

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

    // Veritabanına kaydet
    const dbResult = await db.query(
      'INSERT INTO subscribers (email) VALUES ($1) RETURNING id',
      [email]
    );

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
    res.json({ 
      message: 'Abone olduğunuz için teşekkür ederiz!',
      subscriberId: dbResult.rows[0].id 
    });
  } catch (error) {
    // Eğer e-posta zaten kayıtlıysa
    if (error.code === '23505') { // PostgreSQL unique violation error code
      return res.status(400).json({ error: 'Bu e-posta adresi zaten kayıtlı.' });
    }
    
    console.error('Hata:', error);
    res.status(500).json({ error: 'İşlem sırasında bir hata oluştu.' });
  }
});

module.exports = router; 