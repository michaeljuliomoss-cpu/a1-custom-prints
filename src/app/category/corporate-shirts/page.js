'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

const STYLES = [
  {
    brand: 'Port Authority',
    gender: ['Male', 'Female'],
    image: '/images/category-2-corporate/port-authority-men.jpg',
    colors: ['White', 'Navy', 'Black', 'Light Blue', 'Charcoal', 'Forest Green', 'Maroon', 'Royal Blue', 'Red', 'Gold'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL'],
  },
  {
    brand: 'Paragon',
    gender: ['Male', 'Female'],
    image: '/images/category-2-corporate/paragon-men.jpg',
    colors: ['White', 'Navy', 'Black', 'Light Blue', 'Charcoal', 'Sky', 'Forest Green', 'Maroon', 'Royal Blue', 'Red'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  },
  {
    brand: 'Blue Generation',
    gender: ['Male', 'Female'],
    image: '/images/category-2-corporate/product-1.png',
    colors: ['White', 'Navy', 'Black', 'Charcoal', 'Red', 'Royal Blue', 'Forest Green'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  },
];

export default function CorporateShirts() {
  const [brand, setBrand] = useState('Port Authority');
  const [gender, setGender] = useState('Male');
  const [color, setColor] = useState('White');
  const [size, setSize] = useState('L');
  const [embroidery, setEmbroidery] = useState(true);
  const [qty, setQty] = useState(1);

  const currentStyle = STYLES.find(s => s.brand === brand);
  const basePrice = embroidery ? 35 : 22;
  const total = basePrice * qty;

  return (
    <>
      <Nav />

      <section className="product-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> → Corporate Shirts
          </div>
          <div className="product-hero-grid">
            {/* Images */}
            <div>
              <div className="product-images" style={{ marginBottom: '16px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={currentStyle.image} alt={brand} key={brand + gender} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {brand === 'Paragon' && (
                  <>
                    <div className="chart-card">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/category-2-corporate/paragon-men.jpg" alt="Paragon Men" />
                    </div>
                    <div className="chart-card">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/category-2-corporate/paragon-ladies.jpg" alt="Paragon Ladies" />
                    </div>
                  </>
                )}
                {brand === 'Port Authority' && (
                  <div className="chart-card" style={{ gridColumn: '1 / -1' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/category-2-corporate/color-chart.png" alt="Port Authority Color Chart" />
                  </div>
                )}
              </div>
            </div>

            {/* Configurator */}
            <div className="product-info">
              <div className="accent-line"></div>
              <h1>Corporate Shirts<br/>Blank or Embroidered</h1>
              <div className="price-range">Blank: $22 · Embroidered: $35+</div>
              <p className="description">
                Professional corporate shirts from Port Authority, Paragon, and Blue Generation.
                Available blank or with custom embroidery for your company logo.
                Choose your style, gender, color, and size.
              </p>

              <div className="configurator">
                <div className="config-group">
                  <span className="config-label">Brand</span>
                  <div className="config-options">
                    {STYLES.map(s => (
                      <button
                        key={s.brand}
                        className={`config-chip ${brand === s.brand ? 'active' : ''}`}
                        onClick={() => setBrand(s.brand)}
                      >{s.brand}</button>
                    ))}
                  </div>
                </div>

                <div className="config-group">
                  <span className="config-label">Gender</span>
                  <div className="config-options">
                    {currentStyle.gender.map(g => (
                      <button
                        key={g}
                        className={`config-chip ${gender === g ? 'active' : ''}`}
                        onClick={() => setGender(g)}
                      >{g}</button>
                    ))}
                  </div>
                </div>

                <div className="config-group">
                  <span className="config-label">Type</span>
                  <div className="config-options">
                    <button
                      className={`config-chip ${embroidery ? 'active' : ''}`}
                      onClick={() => setEmbroidery(true)}
                    >Embroidered (+$13)</button>
                    <button
                      className={`config-chip ${!embroidery ? 'active' : ''}`}
                      onClick={() => setEmbroidery(false)}
                    >Blank</button>
                  </div>
                </div>

                <div className="config-group">
                  <span className="config-label">Color</span>
                  <select
                    className="config-select"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  >
                    {currentStyle.colors.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div className="config-group">
                  <span className="config-label">Size</span>
                  <div className="config-options">
                    {currentStyle.sizes.map(s => (
                      <button
                        key={s}
                        className={`config-chip ${size === s ? 'active' : ''}`}
                        onClick={() => setSize(s)}
                      >{s}</button>
                    ))}
                  </div>
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
                  <div className="order-line">
                    <span>Product</span>
                    <span>{brand} {gender} Shirt ({color})</span>
                  </div>
                  <div className="order-line">
                    <span>Type</span>
                    <span>{embroidery ? 'Embroidered' : 'Blank'}</span>
                  </div>
                  <div className="order-line">
                    <span>Size</span>
                    <span>{size}</span>
                  </div>
                  <div className="order-line">
                    <span>Unit Price</span>
                    <span>${basePrice}</span>
                  </div>
                  <div className="order-line">
                    <span>Quantity</span>
                    <span>{qty}</span>
                  </div>
                  <div className="order-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                    Place Order Request
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
