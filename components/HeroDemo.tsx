"use client";
import { useState, useRef, useEffect } from "react";

const SCENARIOS = [
  "My basement is flooding right now, pipe burst under the sink",
  "We had a kitchen fire last night with significant smoke damage",
  "Found mold growing on my bathroom wall, about a square meter",
  "Storm took out part of my roof, water is getting in",
];

type Message = { role: "user" | "assistant"; text: string };

export default function HeroDemo() {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi there. I'm here to help you get the restoration help you need as fast as possible.\n\nWhat type of damage are you dealing with? Water, fire, mold, or storm?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationId] = useState(() => crypto.randomUUID());
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Hide/show main widget when expanded
  useEffect(() => {
    const mainWidget = document.getElementById("__axibridge_host__");
    if (expanded) {
      if (mainWidget) mainWidget.style.display = "none";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      if (mainWidget) mainWidget.style.display = "";
    }
  }, [expanded]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Close on outside click
  useEffect(() => {
    if (!expanded) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [expanded]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    const history = messages.map(m => ({ role: m.role, content: m.text }));
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://axibridge-backend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-AxiBridge-Client-Id": "calgary-restoration-demo" },
        body: JSON.stringify({
          clientId: "calgary-restoration-demo",
          conversationId,
          message: text.trim(),
          history,
        }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", text: data.reply || "I'm having a connection issue. Please try again." }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "Connection issue. The live backend may be waking up. Please try again in a moment." }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
  }

  if (!expanded) {
    return (
      <div
        className="hero-demo-collapsed"
        onClick={() => setExpanded(true)}
        title="Click to try the live demo"
      >
        <div className="hero-demo-prompt">
          <div className="hero-demo-prompt-dot" />
          <span>Try a live demo. Click to chat with the AI.</span>
        </div>
        <div className="widget-container">
          <div className="widget-popup">
            <div className="widget-header">
              <div className="widget-avatar">A</div>
              <div>
                <div className="widget-header-name">AxiBridge Assistant</div>
                <div className="widget-header-status">Online 24/7</div>
              </div>
            </div>
            <div className="widget-messages">
              <div className="widget-msg bot">Hi! We&apos;re available 24/7. Do you have an emergency?</div>
              <div className="widget-msg user">Yes, basement is flooding</div>
              <div className="widget-msg bot">I&apos;ll help right away. What&apos;s the water source?</div>
              <div className="widget-msg user">Broken pipe, started 20 min ago</div>
              <div className="widget-msg typing">
                <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
              </div>
            </div>
            <div className="widget-footer">
              <div className="widget-input-fake">Type a message...</div>
              <div className="widget-send-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="widget-bubble-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-demo-expanded" ref={containerRef}>
      <div className="hero-demo-header">
        <div className="hero-demo-header-left">
          <div className="widget-avatar" style={{width:32,height:32,fontSize:13}}>A</div>
          <div>
            <div style={{fontWeight:700,fontSize:14,color:'#fff'}}>AxiBridge Assistant</div>
            <div style={{fontSize:11,color:'rgba(255,255,255,0.6)'}}>Live demo with Calgary Restoration</div>
          </div>
        </div>
        <button className="hero-demo-close" onClick={() => setExpanded(false)} aria-label="Close demo">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div className="hero-demo-scenarios">
        {SCENARIOS.map((s, i) => (
          <button key={i} className="hero-demo-scenario-btn" onClick={() => sendMessage(s)} disabled={loading}>
            {s}
          </button>
        ))}
      </div>

      <div className="hero-demo-messages">
        {messages.map((m, i) => (
          <div key={i} className={`hero-demo-msg ${m.role}`}>
            {m.role === "assistant" && <div className="hero-demo-avatar">A</div>}
            <div className="hero-demo-bubble">{m.text}</div>
          </div>
        ))}
        {loading && (
          <div className="hero-demo-msg assistant">
            <div className="hero-demo-avatar">A</div>
            <div className="hero-demo-bubble hero-demo-typing">
              <span/><span/><span/>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="hero-demo-input-row">
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Describe your damage scenario..."
          disabled={loading}
          className="hero-demo-input"
        />
        <button className="hero-demo-send" onClick={() => sendMessage(input)} disabled={loading || !input.trim()}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
