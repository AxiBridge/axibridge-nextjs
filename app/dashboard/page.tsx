import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard — AxiBridge",
};

export default function DashboardPage() {
  return (
    <main>
      <section className="coming-soon-section">
        <div className="coming-soon-inner">
          <div className="coming-soon-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
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
