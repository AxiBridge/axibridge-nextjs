import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "How It Works — AxiBridge",
  description: "See exactly how AxiBridge captures emergency leads 24/7 for restoration companies.",
};

export default function HowItWorksPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label">How It Works</div>
          <h1>From missed call to <span className="text-accent">booked job</span> — automatically</h1>
          <p>AxiBridge works silently in the background of your website, capturing and qualifying every lead so you wake up to a full inbox instead of a missed opportunity.</p>
        </div>
      </section>

      {/* VIDEO PLACEHOLDER */}
      <div className="container">
        <ScrollReveal>
          <div className="video-placeholder">
            <div className="video-play-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <p>Product demo video — coming soon</p>
          </div>
        </ScrollReveal>
      </div>

      {/* DETAILED STEPS */}
      <section className="section-detailed-steps">
        <div className="container">
          <div className="detailed-steps">
            {[
              {
                n: "1",
                title: "Embed one line of code on your website",
                desc: "Getting started with AxiBridge is as simple as copying and pasting. We give you a single JavaScript snippet to add to your website — no developer required. It works on WordPress, Squarespace, Wix, Webflow, or any custom-built site.",
                details: [
                  "Takes less than 10 minutes from signup to live",
                  "Works on any website platform",
                  "No coding experience needed",
                  "Widget automatically matches your website colors and branding",
                ],
              },
              {
                n: "2",
                title: "AxiBridge handles all visitor intake, 24/7",
                desc: "The moment a homeowner lands on your website — at 2am, on a Sunday, or during a holiday — the AxiBridge widget is there. It greets visitors, identifies emergencies, and guides them through a structured intake conversation. Our AI knows exactly what questions to ask for restoration jobs.",
                details: [
                  "Damage type — water, fire, mold, storm",
                  "Water category — Cat 1 (clean), Cat 2 (grey), Cat 3 (black)",
                  "Affected area — rooms, square footage estimate",
                  "Cause — burst pipe, flooding, sewage, fire, etc.",
                  "Property address and contact information",
                  "Insurance carrier name and policy number",
                ],
              },
              {
                n: "3",
                title: "Insurance verified in real time",
                desc: "Before a lead ever hits your inbox, AxiBridge runs a real-time insurance verification check. We confirm that the homeowner's policy is active and covers the type of damage reported. This means your crew can dispatch with confidence — no more arriving on site to discover unverifiable coverage.",
                details: [
                  "Real-time API lookup — results in seconds",
                  "Confirms active policy status",
                  "Flags potential coverage issues before dispatch",
                  "Saves your crew time and your company money",
                ],
              },
              {
                n: "4",
                title: "You receive a complete lead summary by email",
                desc: "The moment intake is complete, AxiBridge sends you a structured job brief directly to your inbox. Everything is organized and ready to act on — no phone tag, no missing information, no guessing. Just call the lead back with everything you need, and dispatch your crew immediately.",
                details: [
                  "Homeowner contact info — name, phone, email",
                  "Full damage details from intake conversation",
                  "Property address and access notes",
                  "Insurance carrier, policy number, and verification status",
                  "Urgency level — so you know what to prioritize",
                  "Timestamp — know exactly when the lead came in",
                ],
              },
            ].map((step) => (
              <ScrollReveal key={step.n}>
                <div className="detailed-step">
                  <div className="detailed-step-num">{step.n}</div>
                  <div className="detailed-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    <div className="step-details">
                      {step.details.map((d) => (
                        <div className="step-detail" key={d}>{d}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE EMAIL */}
      <section className="section-features" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div className="features-header">
              <div className="section-label">Sample Lead Summary</div>
              <h2 className="section-title">This is what lands in your inbox</h2>
              <p className="section-subtitle">Every lead email is structured, complete, and ready to act on. No back-and-forth. No missing info.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              <div className="email-mockup">
                <div className="email-bar">
                  <div className="email-dots"><span /><span /><span /></div>
                  <div className="email-title-bar">New Lead — AxiBridge Alert</div>
                </div>
                <div className="email-body">
                  <div className="email-header-row">
                    <div className="email-sender-icon">A</div>
                    <div>
                      <div className="email-from">AxiBridge Lead Alert</div>
                      <div className="email-address">alerts@axibridge.com</div>
                    </div>
                  </div>
                  <div className="email-subject">New Emergency Lead — Basement Flood · 44 Riverside Dr, Toronto</div>
                  <div className="email-time-badge">Received at 2:14 AM — Tuesday</div>
                  <div className="email-fields">
                    {[
                      { label: "Name", value: "Sarah Mitchell" },
                      { label: "Phone", value: "(416) 555-0192" },
                      { label: "Address", value: "44 Riverside Dr, Toronto, ON" },
                      { label: "Damage Type", value: "Water — Burst Pipe" },
                      { label: "Water Category", value: "Category 2 (Grey Water)" },
                      { label: "Affected Area", value: "Basement ~400 sq ft" },
                      { label: "Cause", value: "Burst supply line under sink" },
                    ].map((f) => (
                      <div className="email-field" key={f.label}>
                        <span className="email-field-label">{f.label}</span>
                        <span className="email-field-value">{f.value}</span>
                      </div>
                    ))}
                    <div className="email-field">
                      <span className="email-field-label">Insurance</span>
                      <span className="email-field-value insurance-verified">Intact Insurance · Policy Active · Verified</span>
                    </div>
                    <div className="email-field">
                      <span className="email-field-label">Urgency</span>
                      <span className="email-field-value text-orange">HIGH — Active flooding, dispatch immediately</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <ScrollReveal>
          <div className="cta-inner">
            <h2 className="cta-title">Ready to set it up?</h2>
            <p className="cta-sub">Book a free 20-minute demo and we&apos;ll show you exactly how AxiBridge works for your business — and get you live the same day.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-primary" style={{ fontSize: "16px", padding: "16px 32px" }}>Book a Free Demo</Link>
              <Link href="/contact" className="btn-secondary" style={{ fontSize: "16px", padding: "15px 28px" }}>Contact Us</Link>
            </div>
            <p className="cta-small">Setup takes under 10 minutes &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; Cancel anytime</p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
