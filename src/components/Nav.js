'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">A1<span className="dot"></span></Link>
        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <Link href="/category/dtf-tshirts" onClick={() => setOpen(false)}>DTF T-Shirts</Link>
          <Link href="/category/corporate-shirts" onClick={() => setOpen(false)}>Corporate Shirts</Link>
          <Link href="/category/school-uniforms" onClick={() => setOpen(false)}>School Uniforms</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
