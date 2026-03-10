"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <div className="nav-logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 16 Q8 8 12 12 Q16 16 20 8" />
                <circle cx="4" cy="16" r="2" fill="white" stroke="none" />
                <circle cx="20" cy="8" r="2" fill="white" stroke="none" />
              </svg>
            </div>
            <span style={{color: 'var(--accent)'}}>Axi</span><span style={{color: '#ffffff'}}>Bridge</span>
          </Link>

          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          <div className="nav-cta">
            <Link href="/demo" className="btn-secondary">Try Demo</Link>
            <Link href="/contact" className="btn-primary">Book a Demo</Link>
          </div>

          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile${menuOpen ? " open" : ""}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/how-it-works" onClick={closeMenu}>How It Works</Link>
        <Link href="/pricing" onClick={closeMenu}>Pricing</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link href="/demo" className="btn-secondary" onClick={closeMenu}>Try Demo</Link>
        <Link href="/contact" className="btn-primary" onClick={closeMenu}>Book a Demo</Link>
      </div>
    </>
  );
}
