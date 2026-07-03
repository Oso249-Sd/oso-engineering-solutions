"use client";

import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";

const key = "oso-cookie-consent";

export function CookieConsent({
  text,
  accept,
  decline
}: {
  text: string;
  accept: string;
  decline: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!localStorage.getItem(key));
  }, []);

  if (!show) return null;

  const choose = (value: string) => {
    localStorage.setItem(key, value);
    setShow(false);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-lg border border-border bg-card/95 p-4 text-card-foreground shadow-premium backdrop-blur-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-muted-foreground">{text}</p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => choose("declined")}>
            {decline}
          </Button>
          <Button variant="accent" size="sm" onClick={() => choose("accepted")}>
            {accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
