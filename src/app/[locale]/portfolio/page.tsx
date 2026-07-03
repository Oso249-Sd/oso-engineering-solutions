import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {PageHero} from "@/components/site/page-hero";
import {PortfolioBrowser} from "@/components/site/portfolio-browser";
import {getContent} from "@/lib/content";
import type {Locale} from "@/i18n/routing";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const content = getContent(locale);
  return {title: content.nav[3].label, description: content.home.sections.portfolioTitle};
}

export default async function PortfolioPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <>
      <PageHero
        eyebrow={content.nav[3].label}
        title={content.home.sections.portfolioTitle}
        text={content.home.sections.ctaText}
      />
      <section className="section">
        <div className="container">
          <PortfolioBrowser projects={content.portfolio} locale={locale} labels={content.actions} />
        </div>
      </section>
    </>
  );
}
