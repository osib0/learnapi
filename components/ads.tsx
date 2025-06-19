"use client";
import { useEffect, useId } from "react";

const Ads = () => {
  const uniqueId = useId();

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      window.atOptions = {
        key: '4837633e858b9eb86b61c6923a639116',
        format: 'iframe',
        height: 60,
        width: Math.min(window.innerWidth - 20, 468), // responsive width max 468, minus some margin
        params: {}
      };
    `;

    const script2 = document.createElement("script");
    script2.src = "//www.highperformanceformat.com/4837633e858b9eb86b61c6923a639116/invoke.js";
    script2.type = "text/javascript";
    script2.async = true;

    const adContainer = document.getElementById(uniqueId);
    if (adContainer) {
      adContainer.innerHTML = "";
      adContainer.appendChild(script1);
      adContainer.appendChild(script2);
    }
  }, [uniqueId]);

  return (
    <section className="container mx-auto px-3 sm:px-4 py-4">
      <div id={uniqueId} className="flex justify-center my-4" />
    </section>
  );
};

export default Ads;
