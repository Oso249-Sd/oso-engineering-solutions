import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {QuoteForm} from "@/components/forms/quote-form";
import {PageHero} from "@/components/site/page-hero";
import {getContent} from "@/lib/content";
import type {Locale} from "@/i18n/routing";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const content = getContent(locale);
  return {title: content.actions.quote, description: content.home.sections.ctaText};
}

export default async function QuotePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <>
      <PageHero
        eyebrow={content.actions.quote}
        title={content.home.sections.ctaTitle}
        text={content.home.sections.ctaText}
      />
      <section className="section">
        <div className="container max-w-4xl">
          <QuoteForm content={content} />
        </div>
      </section>
    </>
  );
}
