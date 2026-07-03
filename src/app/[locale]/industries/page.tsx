import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {PageHero} from "@/components/site/page-hero";
import {SectionHeader} from "@/components/site/section-header";
import {iconMap, getContent} from "@/lib/content";
import type {Locale} from "@/i18n/routing";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const content = getContent(locale);
  return {title: content.nav[4].label, description: content.home.sections.industriesTitle};
}

export default async function IndustriesPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <>
      <PageHero
        eyebrow={content.nav[4].label}
        title={content.home.sections.industriesTitle}
        text={content.home.sections.servicesText}
      />
      <section className="section">
        <div className="container space-y-10">
          <SectionHeader title={content.home.sections.industriesTitle} align="center" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.industries.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <div key={industry.title} className="surface rounded-lg p-6">
                  <Icon className="size-8 text-orange" />
                  <h2 className="mt-5 text-2xl font-bold">{industry.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{industry.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
