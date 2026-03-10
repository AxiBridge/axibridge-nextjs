"use client";
import { useEffect } from "react";

export default function DemoWidget() {
  useEffect(() => {
    // Remove any existing widget
    const existing = document.getElementById("__axibridge_host__");
    if (existing) existing.remove();
    const existingScript = document.querySelector("script[data-axibridge-demo]");
    if (existingScript) existingScript.remove();
    (window as any).__AXIBRIDGE_LOADED__ = false;

    const script = document.createElement("script");
    script.src = "https://axibridge-backend.onrender.com/widget/widget.js";
    script.setAttribute("data-client-id", "calgary-restoration-demo");
    script.setAttribute("data-business-name", "Calgary Restoration");
    script.setAttribute("data-color", "#F97316");
    script.setAttribute("data-axibridge-demo", "true");
    document.body.appendChild(script);

    return () => {
      const host = document.getElementById("__axibridge_host__");
      if (host) host.remove();
      script.remove();
      (window as any).__AXIBRIDGE_LOADED__ = false;
    };
  }, []);

  return null;
}
