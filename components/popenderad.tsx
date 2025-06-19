"use client";
import { useEffect } from "react";

const PopunderAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//retortmansion.com/ac/f5/f6/acf5f68de5f97642d6360a4057543a0c.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Koi UI nahi, bas script load kar rahe hain
};

export default PopunderAd;
