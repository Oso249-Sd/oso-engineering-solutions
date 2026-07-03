import type {Metadata} from "next";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import "../globals.css";
import {BackToTop} from "@/components/site/back-to-top";
import {CookieConsent} from "@/components/site/cookie-consent";
import {Footer} from "@/components/site/footer";
import {Header} from "@/components/site/header";
import {Providers} from "@/components/site/providers";
import {ScrollProgress} from "@/components/site/scroll-progress";
import {getContent} from "@/lib/content";
import {routing, type Locale} from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return {
    title: {
      default: messages.meta.title,
      template: `%s | ${getContent(locale).shortBrand}`
    },
    description: messages.meta.description,
    metadataBase: new URL("https://osoengineering.com"),
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      type: "website",
      images: ["/images/engineering-hero.png"],
      locale
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.title,
      description: messages.meta.description,
      images: ["/images/engineering-hero.png"]
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const content = getContent(locale);

  return (
    <html lang={locale} dir={content.dir} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <ScrollProgress />
            <Header content={content} locale={locale} />
            <main>{children}</main>
            <Footer content={content} locale={locale} />
            <BackToTop label={content.actions.backToTop} />
            <CookieConsent
              text={content.cookie}
              accept={content.actions.acceptCookies}
              decline={content.actions.declineCookies}
            />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
