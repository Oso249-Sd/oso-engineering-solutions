import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {BadgeCheck} from "lucide-react";
import {PageHero} from "@/components/site/page-hero";
import {Reveal} from "@/components/site/reveal";
import {SectionHeader} from "@/components/site/section-header";
import {getContent} from "@/lib/content";
import type {Locale} from "@/i18n/routing";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const content = getContent(locale);
  return {title: content.nav[1].label, description: content.about.intro};
}

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <>
      <PageHero eyebrow={content.nav[1].label} title={content.about.title} text={content.about.intro} />

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          {[
            [content.about.labels.mission, content.about.mission],
            [content.about.labels.vision, content.about.vision]
          ].map(([title, text]) => (
            <Reveal key={title}>
              <div className="surface h-full rounded-lg p-7">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-4 leading-8 text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-muted/55">
        <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <SectionHeader
            eyebrow={content.about.labels.story}
            title={content.about.labels.story}
            text={content.about.story}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {content.about.values.map((value) => (
              <div key={value} className="rounded-lg border border-border bg-card p-5">
                <BadgeCheck className="size-6 text-orange" />
                <h3 className="mt-4 text-xl font-bold">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader title={content.about.labels.leadership} />
            <div className="mt-8 space-y-4">
              {content.about.leadership.map((leader) => (
                <div key={leader.name} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                  <p className="mt-2 text-muted-foreground">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title={content.about.labels.timeline} />
            <ol className="mt-8 space-y-4">
              {content.about.timeline.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-xs font-black text-primary-foreground">
                    {index + 1}
                  </span>
                  <p className="rounded-lg border border-border bg-card p-4 leading-7 text-muted-foreground">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
