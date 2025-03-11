"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const startScrolling = () => {
    lenisRef.current?.start();
  };

  const stopScrolling = () => {
    lenisRef.current?.stop();
  };

  const scrollTo = (target: string) => {
    lenisRef.current?.scrollTo(target);
  };

  return { startScrolling, stopScrolling, scrollTo };
};
