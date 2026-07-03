"use client";

import {ArrowUp} from "lucide-react";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";

export function BackToTop({label}: {label: string}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Button
      aria-label={label}
      title={label}
      size="icon"
      variant="accent"
      className={`fixed bottom-5 z-50 rounded-full transition ltr:right-5 rtl:left-5 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
    >
      <ArrowUp />
    </Button>
  );
}
