"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    __phScriptsLoaded?: boolean;
    loadPortfolio?: () => void;
    initPHScripts?: () => void;
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

export default function ClientScripts() {
  const scriptsStarted = useRef(false);

  useEffect(() => {
    // Body attributes for scrollspy
    document.body.setAttribute("data-spy", "scroll");
    document.body.setAttribute("data-target", ".navbar");
    document.body.setAttribute("data-offset", "90");

    if (scriptsStarted.current || typeof window === "undefined") return;
    scriptsStarted.current = true;

    const runLegacyInitializers = () => {
      if (typeof window.initPHScripts === "function") {
        window.initPHScripts();
      }
      if (typeof window.loadPortfolio === "function") {
        window.loadPortfolio();
      }
    };

    if (window.__phScriptsLoaded) {
      runLegacyInitializers();
      return;
    }

    const chain = async () => {
      await loadScript("/vendor/js/bundle.min.js");
      await loadScript("/vendor/js/jquery.appear.js");
      await loadScript("/vendor/js/jquery.fancybox.min.js");
      await loadScript("/vendor/js/owl.carousel.min.js");
      await loadScript("/personal-hotspot/js/jquery.pagepiling.min.js");
      await loadScript("/personal-hotspot/js/timeline.js");
      await loadScript("/vendor/js/contact_us.js");
      await loadScript("/personal-hotspot/js/script.js");

      // Mark as loaded only after the full chain succeeds.
      window.__phScriptsLoaded = true;
      runLegacyInitializers();
    };

    chain().catch((error) => {
      window.__phScriptsLoaded = false;
      console.error(error);
    });

    return () => {
      document.body.removeAttribute("data-spy");
      document.body.removeAttribute("data-target");
      document.body.removeAttribute("data-offset");
    };
  }, []);

  return null;
}
