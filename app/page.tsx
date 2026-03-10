import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HeroDemo from "@/components/HeroDemo";

export default function Home() {
  const stats = [
    { num: "820+", label: "Canadian homes deal with water damage every single day" },
    { num: "40%", label: "of leads go to the first company that responds" },
    { num: "$8K+", label: "average revenue per residential restoration job" },
    { num: "60%", label: "of emergency calls happen outside business hours" },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-gradient" />
          <div className="hero-bg-gradient-2" />
          <div className="hero-grid-lines" />
        </div>

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Built for Restoration Companies
            </div>

            <h1 className="hero-title">
              Never Miss an<br />
              <span className="highlight">Emergency Lead</span><br />
              Again.
            </h1>

            <p className="hero-subtitle">
              AxiBridge handles 24/7 intake for water, fire, and mold restoration companies. While you sleep, our AI captures leads, collects job info, verifies insurance, and emails you a complete summary.
            </p>

            <div className="hero-ctas">
              <Link href="/contact" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
                Book a Free Demo
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                See How It Works
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="hero-trust">
              <span className="hero-trust-text">Built for Canadian restoration companies</span>
              <div className="hero-trust-logos">
                <span className="trust-badge">Calgary</span>
                <span className="trust-badge">Toronto</span>
                <span className="trust-badge">Vancouver</span>
                <span className="trust-badge">Edmonton</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual">
            <HeroDemo />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-problem">
        <div className="container">
          <ScrollReveal className="">
            <div className="problem-header">
              <div className="section-label">The Problem</div>
              <h2 className="section-title">Restoration companies lose their best leads after hours</h2>
              <p className="section-subtitle">Emergency calls don&apos;t follow business hours. When no one answers, that job goes to whoever picks up first, and that&apos;s your competitor.</p>
            </div>
          </ScrollReveal>

          <div className="problem-grid">
            <ScrollReveal>
              <div className="problem-card">
                <div className="problem-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3>Phone rings at 2am, nobody answers</h3>
                <p>Homeowners with a flooded basement call the first number they find. If you don&apos;t answer, they hang up and call the next one. That job is gone forever.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="problem-card">
                <div className="problem-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <h3>Crew dispatched without complete info</h3>
                <p>When intake is rushed over the phone, your crew arrives without knowing the damage type, affected areas, or what equipment to bring, wasting time and money.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="problem-card">
                <div className="problem-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" />
                  </svg>
                </div>
                <h3>Insurance details missing at the job site</h3>
                <p>Your crew can&apos;t start work without confirmed insurance. When details are missing, jobs get delayed and clients get anxious waiting for answers.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="section-solution">
        <div className="container">
          <div className="solution-inner">
            <ScrollReveal>
              <div className="solution-content">
                <div className="section-label">The Solution</div>
                <h2 className="section-title">AxiBridge handles intake automatically. 24/7.</h2>
                <p className="section-subtitle">While you sleep, our AI chat widget is live on your website, capturing leads and collecting every detail. You wake up to a structured lead in your dashboard and a full job brief in your inbox.</p>

                <div className="solution-steps">
                  {[
                    { n: "1", title: "Visitor lands on your website", desc: "The AxiBridge widget is always live, day or night, emergency or not." },
                    { n: "2", title: "AI collects all job information", desc: "Damage type, water category, affected area, cause, property address, and insurance carrier, all captured automatically." },
                    { n: "3", title: "Insurance verified in real time", desc: "Coverage is checked via API before your crew ever leaves the yard." },
                    { n: "4", title: "You receive a complete lead summary", desc: "Wake up to a full job brief in your inbox and your dashboard. Contact info, damage details, insurance status, and urgency level ready to act on." },
                  ].map((step) => (
                    <div className="solution-step" key={step.n}>
                      <div className="step-line-wrapper">
                        <div className="step-number">{step.n}</div>
                        <div className="step-connector" />
                      </div>
                      <div className="step-content">
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="solution-visual">
                <div className="email-mockup">
                  <div className="email-bar">
                    <div className="email-dots"><span /><span /><span /></div>
                    <div className="email-title-bar">Inbox. hello@rapidfloodpro.com</div>
                  </div>
                  <div className="email-body">
                    <div className="email-header-row">
                      <div className="email-sender-icon">A</div>
                      <div>
                        <div className="email-from">AxiBridge Lead Alert</div>
                        <div className="email-address">alerts@axibridge.com</div>
                      </div>
                    </div>
                    <div className="email-subject">New Emergency Lead. Basement Flood, Riverside Drive</div>
                    <div className="email-time-badge">Received at 2:14 AM</div>
                    <div className="email-fields">
                      <div className="email-field"><span className="email-field-label">Contact</span><span className="email-field-value">Sarah M. · (416) 555-0192</span></div>
                      <div className="email-field"><span className="email-field-label">Address</span><span className="email-field-value">44 Riverside Dr, Toronto</span></div>
                      <div className="email-field"><span className="email-field-label">Damage Type</span><span className="email-field-value">Water. Burst Pipe</span></div>
                      <div className="email-field"><span className="email-field-label">Category</span><span className="email-field-value">Cat 2 · ~400 sq ft</span></div>
                      <div className="email-field"><span className="email-field-label">Insurance</span><span className="email-field-value insurance-verified">Intact Insurance · Verified</span></div>
                      <div className="email-field"><span className="email-field-label">Urgency</span><span className="email-field-value text-orange">HIGH. Dispatch immediately</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-features" id="features">
        <div className="container">
          <ScrollReveal>
            <div className="features-header">
              <div className="section-label">Features</div>
              <h2 className="section-title">Everything your team needs, handled automatically</h2>
              <p className="section-subtitle">AxiBridge does the work of a full-time intake coordinator, at a fraction of the cost, available 24/7.</p>
            </div>
          </ScrollReveal>

          <div className="features-grid">
            {[
              { icon: "clock", title: "24/7 Emergency Capture", desc: "The widget never sleeps. Emergency leads at 2am, on weekends, on holidays, captured automatically so you never miss a job." },
              { icon: "chat", title: "Smart AI Intake", desc: "Asks the right questions every time. Damage type, water category (Cat 1/2/3), affected area, cause, and property address. No detail missed." },
              { icon: "shield", title: "Insurance Verification", desc: "Real-time API checks coverage before your crew dispatches, so you arrive job-ready with no paperwork surprises." },
              { icon: "email", title: "Instant Email Summary", desc: "The moment a lead completes intake, you get a full job brief in your inbox. Contact info, damage details, insurance status, and urgency level." },
              { icon: "dashboard", title: "Owner Dashboard", desc: "Every lead flows into your private dashboard. Track status, view full conversation transcripts, see insurance results, and update lead status from new to converted. Your team always knows what's happening." },
              { icon: "code", title: "One-Line Setup", desc: "Paste one line of code onto your website and you're live. The widget uses your business name and your brand color, so it looks like it belongs. Setup takes under 10 minutes." },
            ].map((f) => (
              <ScrollReveal key={f.title}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <FeatureIcon name={f.icon} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-stats">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <ScrollReveal key={i}>
              <div className="stat-item">
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-how" id="how-it-works">
        <div className="container">
          <ScrollReveal>
            <div className="how-header">
              <div className="section-label">How It Works</div>
              <h2 className="section-title">Up and running in 4 simple steps</h2>
              <p className="section-subtitle">No technical knowledge required. If you can copy and paste, you can set up AxiBridge.</p>
            </div>
          </ScrollReveal>
          <div className="how-steps">
            {[
              { n: "1", title: "Embed one line of code", desc: "Paste a single script tag into your website. Works on any platform. WordPress, Squarespace, Wix, or custom sites." },
              { n: "2", title: "AxiBridge goes live 24/7", desc: "The branded chat widget appears on your site automatically. Visitors can start a conversation anytime, day or night." },
              { n: "3", title: "AI handles all intake", desc: "Our AI collects damage details, property info, and insurance information, and verifies coverage in real time." },
              { n: "4", title: "You get the lead summary", desc: "You receive a complete job brief by email and in your dashboard. Contact info, damage details, insurance status, and urgency level. Ready to act on immediately." },
            ].map((step) => (
              <ScrollReveal key={step.n}>
                <div className="how-step">
                  <div className="how-step-num">{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section-pricing">
        <div className="container">
          <div className="pricing-inner">
            <ScrollReveal>
              <div className="section-label">Pricing</div>
              <h2 className="section-title">Simple monthly pricing. No contracts.</h2>
              <p className="section-subtitle">One job captured pays for months of AxiBridge. Book a demo and we&apos;ll walk you through exactly what it costs.</p>

              <div className="pricing-card">
                <div className="pricing-card-title">Everything you need to never miss a lead</div>
                <div className="pricing-card-sub">All features included. Cancel anytime.</div>
                <div className="pricing-features">
                  {[
                    "24/7 AI chat widget on your website",
                    "Smart intake. Damage type, category, property info",
                    "Real-time insurance verification",
                    "Instant email summaries for every lead",
                    "Owner dashboard with lead history and stats",
                    "Branded widget. Your colors, your name",
                  ].map((feat) => (
                    <div className="pricing-feature" key={feat}>
                      <div className="pricing-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "16px", padding: "16px" }}>
                  Book a Free Demo
                </Link>
                <p className="pricing-note">No credit card required. Setup takes under 10 minutes.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="cta-inner">
          <ScrollReveal>
            <h2 className="cta-title">Ready to stop losing emergency leads?</h2>
            <p className="cta-sub">Every missed call is a missed job. AxiBridge makes sure every lead is captured, qualified, and in your inbox, even at 2am.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-primary" style={{ fontSize: "16px", padding: "16px 32px" }}>Book a Free Demo</Link>
              <Link href="/how-it-works" className="btn-secondary" style={{ fontSize: "16px", padding: "15px 28px" }}>See How It Works</Link>
            </div>
            <p className="cta-small">Setup takes under 10 minutes &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; Cancel anytime</p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    chat: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    email: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    dashboard: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
    code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  };
  return <>{icons[name]}</>;
}
