import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY || "boafo_5678";
    console.log("BoafoWidgetInitializer mounted");
    console.log("API Key:", BOAFO_API_KEY);
    
    // Set API key on the script tag
    const script = document.querySelector('script[src*="boafo-accessibility-widget"]');
    if (script) {
      script.setAttribute("data-api-key", BOAFO_API_KEY);
      console.log("Set API key on Boafo script");
    }
    
    // Also initialize via the npm package function
    try {
      initializeBoafoWidget(BOAFO_API_KEY);
      console.log("Boafo widget initialized via npm package");
    } catch (error) {
      console.error("Error initializing Boafo widget:", error);
    }
  }, []);

  return null; // nothing to render
}