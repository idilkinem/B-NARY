'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-info">
              <h2 className="contact-title">İletişime Geçin</h2>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h5>Adres</h5>
                  <p>İstanbul, Türkiye</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h5>Telefon</h5>
                  <p>+90 555 123 4567</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h5>E-posta</h5>
                  <p>nisapaydin004@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Mesaj Gönderin</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Adınız"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-posta Adresiniz"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Konu"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Mesajınız"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-send" disabled={isSubmitting}>
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
              {submitStatus === 'success' && (
                <div className="alert alert-success mt-3">
                  Mesajınız başarıyla gönderildi!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="alert alert-danger mt-3">
                  Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 