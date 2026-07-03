import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {CtaBand} from "@/components/site/cta-band";
import {PageHero} from "@/components/site/page-hero";
import {Reveal} from "@/components/site/reveal";
import {SectionHeader} from "@/components/site/section-header";
import {ServiceCard} from "@/components/site/service-card";
import {getContent} from "@/lib/content";
import type {Locale} from "@/i18n/routing";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const content = getContent(locale);
  return {title: content.nav[2].label, description: content.home.sections.servicesText};
}

export default async function ServicesPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <>
      <PageHero
        eyebrow={content.nav[2].label}
        title={content.home.sections.servicesTitle}
        text={content.home.sections.servicesText}
      />
      <section className="section">
        <div className="container space-y-10">
          <SectionHeader title={content.home.sections.servicesTitle} text={content.home.sections.servicesText} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 6) * 0.04}>
                <ServiceCard service={service} locale={locale} readMore={content.actions.readMore} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title={content.servicePage.ctaTitle}
        text={content.servicePage.ctaText}
        action={content.actions.quote}
        locale={locale}
      />
    </>
  );
}
