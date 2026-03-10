import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <div className="nav-logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M4 16 Q8 8 12 12 Q16 16 20 8" />
                  <circle cx="4" cy="16" r="2" fill="white" stroke="none" />
                  <circle cx="20" cy="8" r="2" fill="white" stroke="none" />
                </svg>
              </div>
              <span style={{color: 'var(--accent)'}}>Axi</span><span style={{color: '#ffffff'}}>Bridge</span>
            </Link>
            <p className="footer-tagline">AI-powered intake for restoration companies. Capture every emergency lead, 24/7.</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><Link href="/#features">Features</Link></li>
                <li><Link href="/contact">Pricing</Link></li>
                <li><Link href="/contact">Book a Demo</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 AxiBridge. All rights reserved.</p>
          <div className="footer-email">
            <a href="mailto:hello@axibridge.com">hello@axibridge.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
