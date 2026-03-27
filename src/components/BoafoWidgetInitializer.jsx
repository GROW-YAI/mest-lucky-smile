import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY;
    
    // Dynamically load the Boafo widget script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js";
    script.async = true;
    
    // Initialize widget after script loads
    script.onload = () => {
      initializeBoafoWidget(BOAFO_API_KEY);
    };
    
    // Append script to document head
    document.head.appendChild(script);
    
    // Cleanup function to remove script if component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // nothing to render
}
