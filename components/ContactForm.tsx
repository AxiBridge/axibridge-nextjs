"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xvzwolpv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-success show">
        <div className="form-success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3>Request received!</h3>
        <p>We&apos;ll be in touch within one business day to book your demo.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first_name" placeholder="John" required />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last_name" placeholder="Smith" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="company">Company Name</label>
        <input type="text" id="company" name="company" placeholder="Smith Restoration Inc." required />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="john@smithrestoration.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="(416) 555-0100" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="service-type">Primary Service Type</label>
        <select id="service-type" name="service_type" defaultValue="">
          <option value="" disabled>Select your main service</option>
          <option value="water">Water Damage Restoration</option>
          <option value="fire">Fire Damage Restoration</option>
          <option value="mold">Mold Remediation</option>
          <option value="storm">Storm Damage Restoration</option>
          <option value="multi">Multiple services</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="website">Your Website (optional)</label>
        <input type="url" id="website" name="website" placeholder="https://yourcompany.com" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Anything you&apos;d like us to know?</label>
        <textarea id="message" name="message" placeholder="Tell us about your business, your main challenges, or any questions you have..." />
      </div>

      {error && <p style={{ color: "#f87171", fontSize: "14px" }}>{error}</p>}

      <button type="submit" className="btn-primary form-submit" disabled={loading}>
        {loading ? "Sending..." : "Request My Free Demo"}
      </button>
      <p className="form-privacy">No spam. No credit card required. We&apos;ll never share your information.</p>
    </form>
  );
}
