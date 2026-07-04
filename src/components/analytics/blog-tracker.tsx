"use client";

import { useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export function BlogTracker() {
  const { track } = useAnalytics();
  
  useEffect(() => {
    let fired = false;
    
    const handleScroll = () => {
      if (fired) return;
      
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      const scrollPercent = scrollTop / (docHeight - winHeight);
      
      if (scrollPercent >= 0.8) {
        track("blog_article_read");
        fired = true;
        window.removeEventListener("scroll", handleScroll);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [track]);

  return null;
}
