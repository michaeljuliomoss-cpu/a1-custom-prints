'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

const PRICING = {
  cotton: { kids: 24, 'SM-XL': 27, XXL: 30 },
  dryfit: { kids: 28, 'SM-XL': 30, XXL: 32 },
};

const COLORS = {
  cotton: ['White', 'Navy', 'Black', 'Maroon', 'Forest Green', 'Red', 'Royal Blue', 'Gold'],
  dryfit: ['White', 'Navy', 'Black', 'Maroon', 'Royal Blue', 'Forest Green', 'Red', 'Safety Green', 'Safety Orange'],
};

export default function SchoolUniforms() {
  const [fabric, setFabric] = useState('cotton');
  const [sizeGroup, setSizeGroup] = useState('SM-XL');
  const [color, setColor] = useState('White');
  const [schoolName, setSchoolName] = useState('');
  const [qty, setQty] = useState(1);

  const price = PRICING[fabric][sizeGroup] || 24;
  const total = price * qty;

  return (
    <>
      <Nav />

      <section className="product-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> → School Uniform Polos
          </div>
          <div className="product-hero-grid">
            {/* Image */}
            <div>
              <div className="product-images">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/category-2-corporate/paragon-ladies.jpg" alt="School Uniform Polo" />
              </div>
              <div style={{ marginTop: '16px' }} className="chart-card">
                <h4>Port Authority Color & Size Chart</h4>
                <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '8px' }}>
                  Available in cotton and dryfit. Full color and size charts available on request.
                </p>
                <div style={{ marginTop: '12px' }}>
                  <a href="/images/category-2-corporate/port-authority-women-chart.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ fontSize: '14px' }}>
                    View Size Chart PDF →
                  </a>
                </div>
              </div>
            </div>

            {/* Configurator */}
            <div className="product-info">
              <div className="product-badge">🎓 School Embroidery</div>
              <h1>School Uniform<br/>Polos</h1>
              <div className="price-range">$24 – $32 per polo</div>
              <p className="description">
                Port Authority brand polos with custom school embroidery.
                Available in cotton and dryfit fabrics. Durable, comfortable, and
                professionally embroidered with your school's logo.
              </p>

              <div className="configurator">
                <div className="config-group">
                  <span className="config-label">Fabric</span>
                  <div className="config-options">
                    <button className={`config-chip ${fabric === 'cotton' ? 'active' : ''}`} onClick={() => setFabric('cotton')}>Cotton</button>
                    <button className={`config-chip ${fabric === 'dryfit' ? 'active' : ''}`} onClick={() => setFabric('dryfit')}>Dryfit</button>
                  </div>
                </div>

                <div className="config-group">
                  <span className="config-label">Size Group</span>
                  <div className="config-options">
                    <button className={`config-chip ${sizeGroup === 'kids' ? 'active' : ''}`} onClick={() => setSizeGroup('kids')}>Kids</button>
                    <button className={`config-chip ${sizeGroup === 'SM-XL' ? 'active' : ''}`} onClick={() => setSizeGroup('SM-XL')}>Adult SM–XL</button>
                    <button className={`config-chip ${sizeGroup === 'XXL' ? 'active' : ''}`} onClick={() => setSizeGroup('XXL')}>Adult XXL</button>
                  </div>
                  <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>
                    ${price} each
                  </div>
                </div>

                <div className="config-group">
                  <span className="config-label">Color</span>
                  <select className="config-select" value={color} onChange={(e) => setColor(e.target.value)}>
                    {COLORS[fabric].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div className="config-group">
                  <span className="config-label">School Name</span>
                  <input type="text" className="config-select" placeholder="e.g. Queen's College, St. Andrew's..."
                    value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
                </div>

                <div className="config-group">
                  <span className="config-label">Quantity</span>
                  <div className="config-qty">
                    <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                    <span>{qty}</span>
                    <button onClick={() => setQty(qty + 1)}>+</button>
                  </div>
                </div>

                <div className="order-summary">
                  <div className="order-line"><span>Product</span><span>Port Authority Polo ({color})</span></div>
                  <div className="order-line"><span>Fabric</span><span>{fabric === 'cotton' ? 'Cotton' : 'Dryfit'}</span></div>
                  <div className="order-line"><span>Size Group</span><span>{sizeGroup === 'kids' ? 'Kids' : sizeGroup === 'SM-XL' ? 'Adult SM-XL' : 'Adult XXL'}</span></div>
                  <div className="order-line"><span>School</span><span>{schoolName || '—'}</span></div>
                  <div className="order-line"><span>Unit Price</span><span>${price}</span></div>
                  <div className="order-line"><span>Quantity</span><span>{qty}</span></div>
                  <div className="order-total"><span>Total</span><span>${total.toFixed(2)}</span></div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                    Place Order Request →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
