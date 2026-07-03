import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {ApplicationForm} from "@/components/forms/application-form";
import {PageHero} from "@/components/site/page-hero";
import {SectionHeader} from "@/components/site/section-header";
import {Badge} from "@/components/ui/badge";
import {getContent} from "@/lib/content";
import type {Locale} from "@/i18n/routing";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const content = getContent(locale);
  return {title: content.nav[6].label, description: content.careers.text};
}

export default async function CareersPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const labels = {...content.forms, ...content.actions};

  return (
    <>
      <PageHero eyebrow={content.nav[6].label} title={content.careers.title} text={content.careers.text} />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="space-y-10">
            <div>
              <SectionHeader title={content.careers.labels.culture} />
              <div className="mt-6 grid gap-3">
                {content.careers.culture.map((item) => (
                  <div key={item} className="rounded-lg border border-border bg-card p-4 font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader title={content.careers.labels.openings} />
              <div className="mt-6 space-y-4">
                {content.careers.openings.map((opening) => (
                  <div key={opening.title} className="rounded-lg border border-border bg-card p-5">
                    <h2 className="text-xl font-bold">{opening.title}</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline">{opening.location}</Badge>
                      <Badge variant="accent">{opening.type}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <SectionHeader title={content.careers.labels.application} />
            <div className="mt-6">
              <ApplicationForm labels={labels} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
