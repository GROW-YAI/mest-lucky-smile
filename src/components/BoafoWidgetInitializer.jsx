import { useEffect } from "react";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = import.meta.env.BOAFO_API_KEY;
    
    // Dynamically load the Boafo widget script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js";
    script.setAttribute("data-api-key", BOAFO_API_KEY);
    script.defer = true;
    
    // Append script to document
    document.body.appendChild(script);
    
    // Cleanup function to remove script if component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // nothing to render
}
