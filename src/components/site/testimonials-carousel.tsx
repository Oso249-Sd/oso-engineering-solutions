"use client";

import {useEffect, useState} from "react";
import {Quote} from "lucide-react";
import {Button} from "@/components/ui/button";
import type {SiteContent} from "@/lib/content";

export function TestimonialsCarousel({
  testimonials
}: {
  testimonials: SiteContent["testimonials"];
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % testimonials.length),
      5200
    );
    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const item = testimonials[active];

  return (
    <div className="surface rounded-lg p-8 md:p-10">
      <Quote className="size-10 text-orange" />
      <blockquote className="mt-6 text-balance text-2xl font-semibold leading-snug">
        “{item.quote}”
      </blockquote>
      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold">{item.name}</p>
          <p className="text-sm text-muted-foreground">{item.role}</p>
        </div>
        <div className="flex gap-2">
          {testimonials.map((testimonial, index) => (
            <Button
              key={testimonial.name}
              type="button"
              size="icon"
              variant={index === active ? "accent" : "outline"}
              className="size-8 rounded-full"
              aria-label={testimonial.name}
              onClick={() => setActive(index)}
            >
              <span className="size-1.5 rounded-full bg-current" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
