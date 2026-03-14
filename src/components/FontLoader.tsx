"use client";
import { useEffect } from "react";

export default function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Fira+Sans:wght@400;500;700&display=swap";
    document.head.appendChild(link);
  }, []);

  return null;
}