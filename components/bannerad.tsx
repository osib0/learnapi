"use client";

import { useEffect } from "react";

const BannerAd = () => {
  useEffect(() => {
    const container = document.getElementById("a2dbef2a2c5cdd02076ab55deb482f74");

    if (!container) return;

    // Clear any existing content
    container.innerHTML = "";

    // 1. Inject atOptions inline script
    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
      atOptions = {
        'key': 'a2dbef2a2c5cdd02076ab55deb482f74',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
      };
    `;
    container.appendChild(configScript);

    // 2. Inject invoke.js script into the container
    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src = "//retortmansion.com/a2dbef2a2c5cdd02076ab55deb482f74/invoke.js";
    adScript.async = true;
    container.appendChild(adScript);
  }, []);

  return (
    <div className="w-full flex justify-center my-4">
      <div id="a2dbef2a2c5cdd02076ab55deb482f74" style={{ width: 728, height: 90 }}></div>
    </div>
  );
};

export default BannerAd;
