'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

const SIZES = {
  kids: ['XSmall', 'Small', 'Medium', 'Large'],
  adult: ['Small', 'Medium', 'Large', 'XL', 'XXL', 'XXXL', 'XXXXL'],
};

const PRICES = {
  kids: { 'XSmall': 13, 'Small': 13, 'Medium': 13, 'Large': 13 },
  adult: { 'Small': 14, 'Medium': 14, 'Large': 14, 'XL': 14, 'XXL': 15, 'XXXL': 17, 'XXXXL': 17 },
};

const COLORS = [
  'White', 'Black', 'Navy', 'Sport Grey', 'Charcoal', 'Heather Gray',
  'Safety Orange', 'Safety Green', 'Safety Pink', 'Purple', 'Red',
  'Maroon', 'Forest Green', 'Military Green', 'Carolina Blue',
  'Royal Blue', 'Dark Navy', 'Orange', 'Gold', 'Yellow', 'Garnet',
  'Cardinal', 'Azalea', 'Ash', 'Daisy', 'Heliconia', 'Irish Green',
  'Kiwi', 'Lime', 'Sky', 'Sage', 'Sand', 'Tennessee Orange'
];

export default function DTFTshirts() {
  const [sizeType, setSizeType] = useState('adult');
  const [size, setSize] = useState('Medium');
  const [color, setColor] = useState('White');
  const [qty, setQty] = useState(1);
  const [fileName, setFileName] = useState('');
  const [notes, setNotes] = useState('');

  const unitPrice = sizeType === 'kids' ? PRICES.kids[size] || 13 : PRICES.adult[size] || 14;
  const total = unitPrice * qty;

  return (
    <>
      <Nav />

      <section className="product-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> → T-Shirts with DTF Print
          </div>
          <div className="product-hero-grid">
            {/* Images */}
            <div>
              <div className="product-images" style={{ marginBottom: '16px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/category-1-dtf-tshirts/gildan-adult-size-chart.jpg" alt="Gildan T-Shirt" />
              </div>
              <div className="size-charts">
                <div className="chart-card">
                  <h4>Adult Size Chart</h4>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/category-1-dtf-tshirts/gildan-adult-size-chart.jpg" alt="Adult size chart" />
                </div>
                <div className="chart-card">
                  <h4>Children Size Chart</h4>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/category-1-dtf-tshirts/gildan-children-size-chart.jpg" alt="Children size chart" />
                </div>
              </div>
            </div>

            {/* Product info + configurator */}
            <div className="product-info">
              <div className="product-badge">🎨 Full-Color DTF Print</div>
              <h1>T-Shirts with<br/>DTF Print</h1>
              <div className="price-range">$13 – $17 per shirt</div>
              <p className="description">
                Gildan 100% cotton t-shirts with full-color DTF (Direct to Film) print.
                Choose your shirt color, size, quantity, and upload your design.
                Our DTF printing delivers vibrant, durable, full-color designs that last.
              </p>

              <div className="configurator">
                <div className="config-group">
                  <span className="config-label">Age Type</span>
                  <div className="config-options">
                    <button className={`config-chip ${sizeType === 'adult' ? 'active' : ''}`} onClick={() => { setSizeType('adult'); setSize('Medium'); }}>Adult</button>
                    <button className={`config-chip ${sizeType === 'kids' ? 'active' : ''}`} onClick={() => { setSizeType('kids'); setSize('Small'); }}>Kids</button>
                  </div>
                </div>

                <div className="config-group">
                  <span className="config-label">Size</span>
                  <div className="config-options">
                    {SIZES[sizeType].map(s => (
                      <button key={s} className={`config-chip ${size === s ? 'active' : ''}`} onClick={() => setSize(s)}>{s}</button>
                    ))}
                  </div>
                  <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: 700, color: 'var(--accent)' }}>
                    ${unitPrice} each
                  </div>
                </div>

                <div className="config-group">
                  <span className="config-label">T-Shirt Color</span>
                  <select className="config-select" value={color} onChange={(e) => setColor(e.target.value)}>
                    {COLORS.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div className="config-group">
                  <span className="config-label">Quantity</span>
                  <div className="config-qty">
                    <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                    <span>{qty}</span>
                    <button onClick={() => setQty(qty + 1)}>+</button>
                  </div>
                </div>

                <div className="config-group">
                  <span className="config-label">Upload Your Design</span>
                  <label className="upload-zone" style={{ display: 'block' }}>
                    <input type="file" accept="image/*,.pdf,.ai,.eps" style={{ display: 'none' }}
                      onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} />
                    <p>{fileName || '📎 Click to upload your design (PNG, JPG, PDF, AI, EPS)'}</p>
                  </label>
                </div>

                <div className="config-group">
                  <span className="config-label">Additional Notes</span>
                  <textarea className="config-select" style={{ minHeight: '80px', resize: 'vertical' }}
                    placeholder="Any special instructions?"
                    value={notes} onChange={(e) => setNotes(e.target.value)} />
                </div>

                <div className="order-summary">
                  <div className="order-line"><span>Product</span><span>Gildan DTF T-Shirt ({color})</span></div>
                  <div className="order-line"><span>Size</span><span>{size} ({sizeType})</span></div>
                  <div className="order-line"><span>Unit Price</span><span>${unitPrice}</span></div>
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
