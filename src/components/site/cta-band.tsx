import {ArrowUpRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Link} from "@/i18n/routing";
import type {Locale} from "@/i18n/routing";

export function CtaBand({
  title,
  text,
  action,
  locale
}: {
  title: string;
  text: string;
  action: string;
  locale: string;
}) {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="overflow-hidden rounded-lg bg-primary text-primary-foreground shadow-premium">
          <div className="relative grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div className="absolute inset-0 bg-grid-soft opacity-14" />
            <div className="relative max-w-2xl space-y-3">
              <h2 className="text-balance text-3xl font-bold">{title}</h2>
              <p className="leading-7 text-primary-foreground/74">{text}</p>
            </div>
            <Button asChild variant="accent" className="relative">
              <Link href="/quote" locale={locale}>
                {action}
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
