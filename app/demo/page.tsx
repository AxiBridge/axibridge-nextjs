import type { Metadata } from "next";
import DemoWidget from "@/components/DemoWidget";

export const metadata: Metadata = {
  title: "Try the Demo — AxiBridge",
  description: "Try the AxiBridge AI intake widget live. See exactly what your customers experience and what gets captured.",
};

const scenarios = [
  { emoji: "💧", text: "My basement is flooding — burst pipe, 2am emergency" },
  { emoji: "🔥", text: "We had a kitchen fire last night, significant smoke damage" },
  { emoji: "🍄", text: "I found mold in my bathroom, about a square meter" },
  { emoji: "⛈️", text: "Storm damage to my roof, water coming in" },
];

export default function DemoPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-label">Live Demo</span>
          <h1>
            <span className="text-accent">Try AxiBridge</span>{" "}
            — right now
          </h1>
          <p>
            This is the actual widget your customers would see on your website. Have a conversation,
            report a damage scenario, and see how the AI handles intake.
          </p>
        </div>
      </section>

      {/* MAIN DEMO CONTENT */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          {/* HOW TO TRY */}
          <div className="demo-scenarios">
            <h3>Try one of these scenarios:</h3>
            <div className="demo-scenario-grid">
              {scenarios.map((s) => (
                <div key={s.text} className="demo-scenario-card">
                  <span className="scenario-emoji">{s.emoji}</span>
                  {s.text}
                </div>
              ))}
            </div>
            <p className="demo-hint">The widget is live in the bottom-right corner of this page →</p>
          </div>

          {/* WHAT GETS CAPTURED */}
          <div className="demo-output-section">
            <span className="section-label">The Output</span>
            <h2 className="section-title">What lands in your dashboard</h2>
            <p className="section-subtitle demo-output-section">
              Every completed conversation generates a structured lead record like this:
            </p>

            <div className="demo-lead-card">
              <div className="demo-lead-header">
                <span className="demo-lead-name">Sarah Mitchell</span>
                <span className="demo-urgency-badge">Emergency</span>
                <span className="demo-dmg-badge">Water — Burst Pipe</span>
              </div>
              <div className="demo-lead-fields">
                <div className="demo-lead-field">
                  <span className="demo-lead-label">Phone</span>
                  <span className="demo-lead-value">(403) 555-0192</span>
                </div>
                <div className="demo-lead-field">
                  <span className="demo-lead-label">Address</span>
                  <span className="demo-lead-value">44 Maple Ave, Calgary, AB</span>
                </div>
                <div className="demo-lead-field">
                  <span className="demo-lead-label">Damage</span>
                  <span className="demo-lead-value">Water — Burst Pipe</span>
                </div>
                <div className="demo-lead-field">
                  <span className="demo-lead-label">Category</span>
                  <span className="demo-lead-value">Cat 2 (Grey Water)</span>
                </div>
                <div className="demo-lead-field">
                  <span className="demo-lead-label">Insurance</span>
                  <span className="demo-lead-value verified">Intact Insurance · Verified ✓</span>
                </div>
                <div className="demo-lead-field">
                  <span className="demo-lead-label">Received</span>
                  <span className="demo-lead-value after-hours">2:14 AM · After Hours</span>
                </div>
              </div>
              <div className="demo-lead-note">
                Plus the full conversation transcript and any photos submitted.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Live widget loader */}
      <DemoWidget />
    </main>
  );
}
