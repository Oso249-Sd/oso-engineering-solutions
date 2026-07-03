import Image from "next/image";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {CtaBand} from "@/components/site/cta-band";
import {PageHero} from "@/components/site/page-hero";
import {SectionHeader} from "@/components/site/section-header";
import {getContent, getProject} from "@/lib/content";
import {routing, type Locale} from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getContent(locale).portfolio.map((project) => ({locale, slug: project.slug}))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}): Promise<Metadata> {
  const {locale, slug} = await params;
  const project = getProject(locale, slug);
  return {title: project?.title ?? getContent(locale).nav[3].label, description: project?.summary};
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const project = getProject(locale, slug);

  if (!project) notFound();

  const labels = content.portfolioLabels;

  return (
    <>
      <PageHero
        eyebrow={labels.caseStudy}
        title={project.title}
        text={project.summary}
        image={project.image}
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div className="space-y-8">
            <div className="relative aspect-[1.55] overflow-hidden rounded-lg border border-border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
            {[
              [labels.challenge, project.challenge],
              [labels.solution, project.solution],
              [labels.outcome, project.outcome]
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-3 leading-8 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <aside className="surface h-fit rounded-lg p-6">
            <SectionHeader title={labels.software} />
            <div className="mt-6 flex flex-wrap gap-2">
              {project.software.map((item) => (
                <Badge key={item} variant="accent">
                  {item}
                </Badge>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <CtaBand
        title={content.home.sections.ctaTitle}
        text={content.home.sections.ctaText}
        action={content.actions.quote}
        locale={locale}
      />
    </>
  );
}
