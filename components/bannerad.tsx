"use client";

import { useEffect } from "react";

const BannerAd = () => {
  useEffect(() => {
    const container = document.getElementById("8f046fa16a877764617662bdbd6444a9");

    if (!container) return;

    // Clear any existing content
    container.innerHTML = "";

    // 1. Inject atOptions inline script
    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
      atOptions = {
        'key': '8f046fa16a877764617662bdbd6444a9',
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
    adScript.src = "//retortmansion.com/8f046fa16a877764617662bdbd6444a9/invoke.js";
    adScript.async = true;
    container.appendChild(adScript);
  }, []);

  return (
    <div className="w-full flex justify-center my-4">
      <div id="8f046fa16a877764617662bdbd6444a9" style={{ width: 468, height: 60 }}></div>
    </div>
  );
};

export default BannerAd;
