"use client";
import { useEffect } from "react";

const ProfitablerateAd = () => {
  useEffect(() => {
    const container = document.getElementById("container-b365502eed5bfff2b0aa8c3410f16b4e");
    if (!container) return;

    const script = document.createElement("script");
    script.src = "//retortmansion.com/b365502eed5bfff2b0aa8c3410f16b4e/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    container.innerHTML = ""; // Clear old ads
    container.appendChild(script);

    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="my-4 flex justify-center">
      <div id="container-b365502eed5bfff2b0aa8c3410f16b4e" />
    </div>
  );
};

export default ProfitablerateAd;
