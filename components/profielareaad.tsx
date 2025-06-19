"use client";
import { useEffect } from "react";

const ProfitablerateAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl26960036.profitableratecpm.com/4309f1efafa0eba0eb9d478325234ea8/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    const container = document.getElementById("container-4309f1efafa0eba0eb9d478325234ea8");

    if (container) {
      container.innerHTML = ""; // Optional: clear any previous content
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="my-4 flex justify-center">
      <div id="container-4309f1efafa0eba0eb9d478325234ea8" />
    </div>
  );
};

export default ProfitablerateAd;
