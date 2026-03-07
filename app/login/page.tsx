import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Portal — AxiBridge",
};

export default function LoginPage() {
  return (
    <main>
      <section className="coming-soon-section">
        <div className="coming-soon-inner">
          <div className="coming-soon-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h1>Client portal coming soon.</h1>
          <p>
            We&apos;re building a dedicated dashboard for AxiBridge clients. In the meantime, contact us at{" "}
            <a href="mailto:hello@axibridge.com">hello@axibridge.com</a> and we&apos;ll take care of you directly.
          </p>

          <Link href="/contact" className="btn-primary">
            Book a Demo
          </Link>

          <Link href="/" className="coming-soon-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
