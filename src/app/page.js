import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="accent-line"></div>
              <h1 className="display">Custom Prints<br/>& Embroidery</h1>
              <p>
                Premium DTF printing and embroidery services in The Bahamas.
                From custom t-shirts to corporate wear and school uniforms —
                quality you can feel, designs that make an impression.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/category/dtf-tshirts" className="btn btn-primary">Shop Now</Link>
                <Link href="/contact" className="btn btn-outline">Get a Quote</Link>
              </div>
            </div>
            <div className="hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero/hero-banner.jpg" alt="A1 Custom Prints & Embroidery banner" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>Three ways to customize. Choose your category and start building your order.</p>
          </div>
          <div className="category-grid">
            {/* Category 1 */}
            <Link href="/category/dtf-tshirts" className="category-card">
              <div className="category-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/category-1-dtf-tshirts/gildan-adult-size-chart.jpg" alt="DTF Print T-Shirts" />
              </div>
              <div className="category-card-body">
                <h3>T-Shirts with DTF Print</h3>
                <p>Full-color DTF printed Gildan 100% cotton t-shirts. Choose your color, size, and upload your design.</p>
                <div className="category-price">From $13</div>
                <span className="btn btn-outline" style={{ fontSize: '14px', padding: '8px 20px' }}>Configure →</span>
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
                <p>Port Authority, Paragon, and Blue Generation styles. Blank or embroidered for your team.</p>
                <div className="category-price">Blank or Embroidered</div>
                <span className="btn btn-outline" style={{ fontSize: '14px', padding: '8px 20px' }}>Configure →</span>
              </div>
            </Link>

            {/* Category 3 */}
            <Link href="/category/school-uniforms" className="category-card">
              <div className="category-card-image" style={{ background: 'var(--accent-soft)' }}>
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <div style={{ fontSize: '64px', marginBottom: '12px' }}>🎓</div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)' }}>School Uniform Polos</div>
                  <div style={{ fontSize: '14px', color: 'var(--ink-soft)', marginTop: '8px' }}>Embroidered · Cotton & Dryfit</div>
                </div>
              </div>
              <div className="category-card-body">
                <h3>School Uniform Polos</h3>
                <p>Port Authority polos with custom embroidery. Cotton and dryfit options for students.</p>
                <div className="category-price">From $24</div>
                <span className="btn btn-outline" style={{ fontSize: '14px', padding: '8px 20px' }}>Configure →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Simple steps from concept to custom product.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎨</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, marginBottom: '8px' }}>Choose</h3>
              <p style={{ fontSize: '15px', color: 'var(--ink-soft)' }}>Pick your product, style, and color</p>
            </div>
            <div>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📏</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, marginBottom: '8px' }}>Size</h3>
              <p style={{ fontSize: '15px', color: 'var(--ink-soft)' }}>Select sizes from our size charts</p>
            </div>
            <div>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📤</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, marginBottom: '8px' }}>Upload</h3>
              <p style={{ fontSize: '15px', color: 'var(--ink-soft)' }}>Send us your design or logo</p>
            </div>
            <div>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📦</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, marginBottom: '8px' }}>Receive</h3>
              <p style={{ fontSize: '15px', color: 'var(--ink-soft)' }}>We print, embroider & deliver</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-soft">
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <h2 className="headings" style={{ marginBottom: '16px' }}>Ready to start your custom order?</h2>
          <p style={{ fontSize: '18px', color: 'var(--ink-soft)', marginBottom: '30px' }}>
            Get in touch and we'll bring your design to life.
          </p>
          <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
