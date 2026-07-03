import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
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
  return {title: content.legal.termsTitle, description: content.legal.terms};
}

export default async function TermsPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <>
      <PageHero
        eyebrow={content.footer.legal}
        title={content.legal.termsTitle}
        text={content.legal.terms}
      />
      <section className="section">
        <div className="container max-w-3xl rounded-lg border border-border bg-card p-7 leading-8 text-muted-foreground">
          {content.legal.terms}
        </div>
      </section>
    </>
  );
}
