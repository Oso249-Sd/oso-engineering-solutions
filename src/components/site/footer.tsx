import {Mail, MapPin, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Link} from "@/i18n/routing";
import type {SiteContent} from "@/lib/content";
import {getV2Content} from "@/lib/v2-content";

export function Footer({
  content,
  locale
}: {
  content: SiteContent;
  locale: string;
}) {
  const v2 = getV2Content(locale);
  const serviceLinks = content.services.slice(0, 6);

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.25fr_.8fr_.8fr_1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md bg-accent text-sm font-black text-accent-foreground">
              {locale === "ar" ? "أو" : "OS"}
            </span>
            <div>
              <div className="font-heading font-bold">{content.brand}</div>
              <div className="text-sm text-primary-foreground/68">{content.home.heroKicker}</div>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-primary-foreground/72">
            {content.footer.tagline}
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-primary-foreground/70">
            {content.footer.socials.map((social) => (
              <span key={social} className="rounded-full border border-white/15 px-3 py-1">
                {social}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold">{content.footer.company}</h2>
          <ul className="space-y-3 text-sm text-primary-foreground/72">
            {content.nav.slice(1, 5).map((item) => (
              <li key={item.href}>
                <Link href={item.href} locale={locale} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/portal" locale={locale} className="hover:text-accent">
                {v2.portal.navLabel}
              </Link>
            </li>
            <li>
              <Link href="/admin" locale={locale} className="hover:text-accent">
                {v2.admin.navLabel}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold">{content.nav[2].label}</h2>
          <ul className="space-y-3 text-sm text-primary-foreground/72">
            {serviceLinks.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} locale={locale} className="hover:text-accent">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <div>
            <h2 className="mb-3 text-sm font-bold">{content.actions.newsletter}</h2>
            <p className="text-sm leading-6 text-primary-foreground/72">
              {content.footer.newsletterText}
            </p>
          </div>
          <form className="flex gap-2">
            <Input
              type="email"
              aria-label={content.forms.email}
              placeholder={content.forms.email}
              className="border-white/15 bg-white/10 text-white placeholder:text-white/55"
            />
            <Button type="submit" variant="accent">
              {content.actions.submit}
            </Button>
          </form>
          <div className="space-y-2 text-sm text-primary-foreground/72">
            <p className="flex items-center gap-2">
              <Mail className="size-4" />
              {content.contact.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4" />
              {content.contact.phone}
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-1 size-4 shrink-0" />
              {content.contact.address}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-3 text-xs text-primary-foreground/58 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {content.brand}</p>
          <div className="flex gap-4">
            <Link href="/privacy" locale={locale} className="hover:text-accent">
              {content.legal.privacyTitle}
            </Link>
            <Link href="/terms" locale={locale} className="hover:text-accent">
              {content.legal.termsTitle}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
