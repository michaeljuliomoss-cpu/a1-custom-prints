'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
  // Scroll reveal — IntersectionObserver, no deps
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-badge animate-fade-in-up stagger-1">
                <span className="dot-pulse"></span>
                Custom Prints & Embroidery · Nassau, Bahamas
              </div>
              <h1 className="display animate-fade-in-up stagger-2">
                Make it yours.<br/>
                Make it bold.
              </h1>
              <p className="hero-desc animate-fade-in-up stagger-3">
                Premium DTF printing and embroidery on Gildan tees, corporate polos,
                and school uniforms. Upload your design, pick your colors, and we handle the rest.
              </p>
              <div className="hero-buttons animate-fade-in-up stagger-4">
                <Link href="/category/dtf-tshirts" className="btn btn-primary btn-large">Shop T-Shirts →</Link>
                <Link href="/category/corporate-shirts" className="btn btn-secondary btn-large">Corporate Wear</Link>
              </div>
            </div>
            <div className="hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero/hero-banner.jpg" alt="A1 Custom Prints & Embroidery" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>What we do</h2>
            <p>Three ways to customize. Pick your category, choose your style, upload your design.</p>
          </div>
          <div className="category-grid reveal-stagger">
            {/* Category 1 */}
            <Link href="/category/dtf-tshirts" className="category-card">
              <div className="category-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/category-1-dtf-tshirts/gildan-adult-size-chart.jpg" alt="DTF Print T-Shirts" />
              </div>
              <div className="category-card-body">
                <h3>T-Shirts with DTF Print</h3>
                <p>Full-color DTF printed Gildan 100% cotton tees. Pick your color, size, and upload your design.</p>
                <div className="category-price">From $13</div>
                <span className="btn btn-primary" style={{ fontSize: '14px', padding: '8px 20px' }}>Configure →</span>
              </div>
            </Link>

            {/* Category 2 */}
            <Link href="/category/corporate-shirts" className="category-card">
              <div className="category-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/category-2-corporate/port-authority-men.jpg" alt="Corporate Shirts" />
              </div>
              <div className="category-card-body">
                <h3>Corporate Shirts</h3>
                <p>Port Authority, Paragon, and Blue Generation. Blank or embroidered for your team.</p>
                <div className="category-price">Blank or Embroidered</div>
                <span className="btn btn-blue" style={{ fontSize: '14px', padding: '8px 20px' }}>Configure →</span>
              </div>
            </Link>

            {/* Category 3 */}
            <Link href="/category/school-uniforms" className="category-card">
              <div className="category-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/category-2-corporate/paragon-ladies.jpg" alt="School Uniform Polos" />
              </div>
              <div className="category-card-body">
                <h3>School Uniform Polos</h3>
                <p>Port Authority polos with custom school embroidery. Cotton and dryfit options.</p>
                <div className="category-price">From $24</div>
                <span className="btn btn-primary" style={{ fontSize: '14px', padding: '8px 20px' }}>Configure →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="section-header reveal">
            <h2>How it works</h2>
            <p>Simple steps from concept to custom product.</p>
          </div>
          <div className="steps-grid reveal-stagger">
            <div className="step-card">
              <div className="step-icon">🎨</div>
              <h3>Choose</h3>
              <p>Pick your product, style, and color</p>
            </div>
            <div className="step-card">
              <div className="step-icon">📏</div>
              <h3>Size</h3>
              <p>Select sizes from our size charts</p>
            </div>
            <div className="step-card">
              <div className="step-icon">📤</div>
              <h3>Upload</h3>
              <p>Send us your design or logo</p>
            </div>
            <div className="step-card">
              <div className="step-icon">📦</div>
              <h3>Receive</h3>
              <p>We print, embroider & deliver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="section">
        <div className="container">
          <div className="payment-section reveal">
            <h3>💳 How to Pay</h3>
            <p>All payments are made with any credit or debit card through Suncash.</p>
            <a href="https://suncash.me/A1" target="_blank" rel="noopener noreferrer" className="payment-badge">
              Pay with Suncash →
            </a>
            <p className="payment-note">Secure card payments via suncash.me/A1</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="cta-section reveal">
            <h2>Ready to make it yours?</h2>
            <p>Get in touch and we'll bring your design to life.</p>
            <Link href="/contact" className="btn btn-large">Get a Quote →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
