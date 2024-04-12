"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: -100 });
    AOS.refresh();
  }, []);

  return null;
};
