"use client";

import {Languages} from "lucide-react";
import {useLocale} from "next-intl";
import {Button} from "@/components/ui/button";
import {usePathname, useRouter} from "@/i18n/routing";
import type {Locale} from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale: Locale = locale === "ar" ? "en" : "ar";

  const switchLanguage = () => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <Button
      aria-label={nextLocale === "ar" ? "العربية" : "English"}
      title={nextLocale === "ar" ? "العربية" : "English"}
      variant="ghost"
      size="sm"
      onClick={switchLanguage}
    >
      <Languages />
      <span>{nextLocale === "ar" ? "العربية" : "EN"}</span>
    </Button>
  );
}
