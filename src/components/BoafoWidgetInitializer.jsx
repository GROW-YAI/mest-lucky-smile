import { useEffect } from "react";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY;
    console.log("BoafoWidgetInitializer mounted");
    console.log("API Key:", BOAFO_API_KEY);
    
    // Remove any existing Boafo script to avoid duplicates
    const existingScript = document.querySelector('script[src*="boafo-accessibility-widget"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create new script element with API key
    const script = document.createElement("script");
    script.src = "https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js";
    script.setAttribute("data-api-key", BOAFO_API_KEY);
    script.defer = true;
    
    // Append to document
    document.body.appendChild(script);
    console.log("Boafo script added with API key");
    
    // Cleanup on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // nothing to render
}