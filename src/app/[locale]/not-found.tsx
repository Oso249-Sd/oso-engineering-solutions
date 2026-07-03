import {getLocale} from "next-intl/server";
import {Button} from "@/components/ui/button";
import {Link} from "@/i18n/routing";
import {getContent} from "@/lib/content";
import type {Locale} from "@/i18n/routing";

export default async function NotFound() {
  const locale = (await getLocale()) as Locale;
  const content = getContent(locale);

  return (
    <section className="grid min-h-screen place-items-center bg-primary px-4 text-center text-primary-foreground">
      <div className="max-w-xl space-y-6">
        <p className="text-sm font-black text-accent">404</p>
        <h1 className="text-4xl font-bold">{content.notFound.title}</h1>
        <p className="leading-8 text-primary-foreground/74">{content.notFound.text}</p>
        <Button asChild variant="accent">
          <Link href="/" locale={locale}>
            {content.actions.backHome}
          </Link>
        </Button>
      </div>
    </section>
  );
}
