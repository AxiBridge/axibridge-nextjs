import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a Demo — AxiBridge",
  description: "Book a free 20-minute demo with AxiBridge. See how we capture emergency leads 24/7 for your restoration business.",
};

export default function ContactPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero" style={{ paddingBottom: 40 }}>
        <div className="page-hero-inner">
          <div className="section-label">Book a Demo</div>
          <h1>Let&apos;s get you set up in <span className="text-accent">10 minutes</span></h1>
          <p>
            Fill out the form below and we&apos;ll reach out within one business day to schedule your free demo — or reach us directly at{" "}
            <a href="mailto:hello@axibridge.com" style={{ color: "var(--accent)" }}>hello@axibridge.com</a>
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <div className="contact-inner">

          {/* Left: Info */}
          <ScrollReveal>
            <div className="contact-info">
              <h2>What to expect on the demo call</h2>
              <p>We&apos;ll walk you through exactly how AxiBridge works, show you a live demo of the widget, and answer any questions you have. If it&apos;s a fit, we can get you live the same day.</p>

              <div className="contact-details">
                {[
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
                    label: "Demo Length",
                    value: "20 minutes, no pressure",
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
                    label: "Response Time",
                    value: "Within 1 business day",
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
                    label: "Email Us Directly",
                    value: <a href="mailto:hello@axibridge.com" style={{ color: "var(--accent)" }}>hello@axibridge.com</a>,
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
                    label: "Serving",
                    value: "Canada & United States",
                  },
                ].map((d) => (
                  <div className="contact-detail" key={d.label}>
                    <div className="contact-detail-icon">{d.icon}</div>
                    <div>
                      <div className="contact-detail-label">{d.label}</div>
                      <div className="contact-detail-value">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-benefits">
                <h4>What&apos;s included in the demo</h4>
                <div className="benefit-list">
                  {[
                    "Live walkthrough of the AI intake widget",
                    "Real sample lead summary email",
                    "Insurance verification demo",
                    "Dashboard overview",
                    "Pricing breakdown (no surprises)",
                    "Setup walkthrough — live on the call if you want",
                  ].map((b) => (
                    <div className="benefit-item" key={b}>
                      <span className="benefit-dot" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal>
            <div className="contact-form-wrap">
              <div className="form-title">Book your free demo</div>
              <div className="form-subtitle">We&apos;ll reach out within 1 business day to confirm your time.</div>
              <ContactForm />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="section-stats" style={{ borderTop: "1px solid var(--border)", borderBottom: "none" }}>
        <div className="stats-grid">
          {[
            { accent: "10", suffix: " min", label: "Average setup time from signup to live" },
            { accent: "24", suffix: "/7", label: "Widget coverage, even when you're asleep" },
            { prefix: "$", accent: "0", label: "Cost to book a demo — completely free" },
            { accent: "1", suffix: " job", label: "Captured pays for months of AxiBridge" },
          ].map((s, i) => (
            <ScrollReveal key={i}>
              <div className="stat-item">
                <div className="stat-number">{s.prefix}<span>{s.accent}</span>{s.suffix}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
