'use client';

import { useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', category: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mail client with prefilled content
    const subject = encodeURIComponent(`Order Inquiry - ${form.category || 'General'} - ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCategory: ${form.category}\n\n${form.message}`
    );
    window.location.href = `mailto:designerprinting001@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <Nav />

      <section className="section">
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="accent-line"></div>
          <h1 className="display" style={{ fontSize: 'clamp(40px, 6vw, 72px)', marginBottom: '20px' }}>Get a Quote</h1>
          <p style={{ fontSize: '18px', color: 'var(--ink-soft)', marginBottom: '40px' }}>
            Tell us what you need and we'll get back to you with pricing and details.
            For custom orders, please include your design details and quantities.
          </p>

          <form onSubmit={handleSubmit} className="configurator">
            <div className="config-group">
              <label className="config-label">Name</label>
              <input
                className="config-select"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div className="config-group">
              <label className="config-label">Email</label>
              <input
                className="config-select"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
              />
            </div>
            <div className="config-group">
              <label className="config-label">Phone</label>
              <input
                className="config-select"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+1 (242) ..."
              />
            </div>
            <div className="config-group">
              <label className="config-label">Category</label>
              <select
                className="config-select"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="">Select a category</option>
                <option value="DTF T-Shirts">DTF T-Shirts</option>
                <option value="Corporate Shirts">Corporate Shirts</option>
                <option value="School Uniforms">School Uniforms</option>
                <option value="Other">Other / General Inquiry</option>
              </select>
            </div>
            <div className="config-group">
              <label className="config-label">Message</label>
              <textarea
                className="config-select"
                style={{ minHeight: '120px', resize: 'vertical' }}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your order — quantities, designs, colors, timeline..."
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Inquiry
            </button>
            {sent && (
              <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--accent)', fontSize: '15px' }}>
                ✅ Your email client should now be open. If not, email us at designerprinting001@gmail.com
              </p>
            )}
          </form>

          <div style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-soft)', borderRadius: '8px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, marginBottom: '12px' }}>
              Contact Directly
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--ink-soft)', marginBottom: '8px' }}>
              📧 <a href="mailto:designerprinting001@gmail.com" style={{ color: 'var(--accent)' }}>designerprinting001@gmail.com</a>
            </p>
            <p style={{ fontSize: '15px', color: 'var(--ink-soft)' }}>
              📍 The Bahamas
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
