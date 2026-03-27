import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY;
    console.log("BoafoWidgetInitializer mounted");
    console.log("API Key:", BOAFO_API_KEY);
    
    try {
      initializeBoafoWidget(BOAFO_API_KEY);
      console.log("Boafo widget initialized successfully");
    } catch (error) {
      console.error("Error initializing Boafo widget:", error);
    }
  }, []);

  return null; // nothing to render
}