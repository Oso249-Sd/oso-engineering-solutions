"use client";

import {ArrowUpRight, LockKeyhole, Menu, X} from "lucide-react";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Link, usePathname} from "@/i18n/routing";
import {cn} from "@/lib/utils";
import type {SiteContent} from "@/lib/content";
import {getV2Content} from "@/lib/v2-content";
import {LanguageSwitcher} from "./language-switcher";
import {ThemeToggle} from "./theme-toggle";

export function Header({
  content,
  locale
}: {
  content: SiteContent;
  locale: string;
}) {
  const v2 = getV2Content(locale);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[65] transition duration-300",
        scrolled
          ? "border-b border-border bg-background/88 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" locale={locale} className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid size-10 place-items-center rounded-md bg-primary text-sm font-black text-primary-foreground shadow-lift">
            {locale === "ar" ? "أو" : "OS"}
          </span>
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="font-heading text-sm font-bold">{content.brand}</span>
            <span className="text-xs text-muted-foreground">{content.home.heroKicker}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              locale={locale}
              className={cn(
                "focus-ring rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground",
                pathname === item.href && "bg-muted text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <Link href="/portal" locale={locale}>
              <LockKeyhole />
              {v2.portal.navLabel}
            </Link>
          </Button>
          <Button asChild variant="accent">
            <Link href="/quote" locale={locale}>
              {content.actions.quote}
              <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            size="icon"
            variant="ghost"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "grid transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <nav className="container grid gap-1 border-t border-border bg-background/96 py-4 backdrop-blur-xl">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                locale={locale}
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/portal"
              locale={locale}
              className="focus-ring rounded-md px-3 py-3 text-sm font-semibold hover:bg-muted"
            >
              {v2.portal.navLabel}
            </Link>
            <Link
              href="/admin"
              locale={locale}
              className="focus-ring rounded-md px-3 py-3 text-sm font-semibold hover:bg-muted"
            >
              {v2.admin.navLabel}
            </Link>
            <Button asChild variant="accent" className="mt-2">
              <Link href="/quote" locale={locale}>
                {content.actions.quote}
                <ArrowUpRight />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
