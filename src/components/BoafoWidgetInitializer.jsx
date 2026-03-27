import { useEffect } from "react";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY;
    console.log("BoafoWidgetInitializer mounted");
    console.log("API Key:", BOAFO_API_KEY);
    
    // Find the Boafo script and set the API key
    const script = document.querySelector('script[src*="boafo-accessibility-widget"]');
    if (script) {
      script.setAttribute("data-api-key", BOAFO_API_KEY);
      console.log("Set API key on Boafo script");
    } else {
      console.error("Boafo script not found");
    }
  }, []);

  return null; // nothing to render
}