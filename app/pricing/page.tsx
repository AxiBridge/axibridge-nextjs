import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - AxiBridge",
  description: "Simple monthly pricing for AxiBridge AI lead capture. $249/month, no contracts, cancel anytime.",
};

const features = [
  "24/7 AI chat widget on your website",
  "Unlimited leads captured",
  "Smart intake. Damage type, category, property info",
  "Real-time insurance verification",
  "Instant email summaries for every lead",
  "SMS alerts for emergency leads",
  "Owner dashboard with full lead history",
  "Branded widget. Your colors, your name",
  "Photo upload from homeowners",
  "Setup in under 10 minutes",
];

const faqs = [
  {
    q: "Is there a setup fee?",
    a: "No. There is no setup fee, no onboarding fee, and no contract. You pay $249/month and can cancel any time.",
  },
  {
    q: "How long does setup take?",
    a: "Under 10 minutes. We give you a single line of code to paste into your website. That's it.",
  },
  {
    q: "What if I need help setting up?",
    a: "We walk you through it on the demo call and can get you live the same day.",
  },
  {
    q: "Does it work with my website?",
    a: "Yes. The widget works on any website. WordPress, Wix, Squarespace, Webflow, custom HTML, or anything else.",
  },
  {
    q: "What happens if a lead comes in at 3am?",
    a: "The AI handles the full intake conversation, captures all the job details, and emails you a complete summary. You wake up to a full inbox.",
  },
  {
    q: "Can I customize the widget?",
    a: "Yes. The widget uses your business name and your brand color. It looks like it belongs on your site.",
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-label">Pricing</span>
          <h1>Simple pricing. No surprises.</h1>
          <p>One captured job pays for AxiBridge many times over. No contracts, no setup fees.</p>
        </div>
      </section>

      {/* PRICING CARD */}
      <section style={{ padding: "0 24px 80px" }}>
        <div className="pricing-page-inner">
          <div className="pricing-card">
            <div className="pricing-badge">Most Popular</div>

            <div>
              <span className="pricing-price">
                <span>$</span>249
              </span>
              <span className="pricing-period">/mo</span>
            </div>

            <p className="pricing-card-sub">Everything included. Cancel anytime.</p>

            <ul className="pricing-features">
              {features.map((feature) => (
                <li key={feature} className="pricing-feature">
                  <span className="pricing-check">
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Book a Free Demo
            </Link>
            <p className="pricing-note">No credit card required. Setup takes under 10 minutes.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 24px 80px" }}>
        <div className="faq-section">
          <span className="section-label">FAQ</span>
          <h2>Common questions</h2>
          {faqs.map((faq) => (
            <div key={faq.q} className="faq-item">
              <p className="faq-q">{faq.q}</p>
              <p className="faq-a">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-cta">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to never miss a lead?</h2>
          <p className="cta-sub">Book a free demo and we&apos;ll get you live today.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Book Your Free Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
