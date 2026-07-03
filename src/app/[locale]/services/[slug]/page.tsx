import Image from "next/image";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {CheckCircle2} from "lucide-react";
import {CtaBand} from "@/components/site/cta-band";
import {PageHero} from "@/components/site/page-hero";
import {SectionHeader} from "@/components/site/section-header";
import {ServiceCard} from "@/components/site/service-card";
import {Badge} from "@/components/ui/badge";
import {getContent, getService, iconMap, serviceSlugs} from "@/lib/content";
import {routing, type Locale} from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({locale, slug}))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}): Promise<Metadata> {
  const {locale, slug} = await params;
  const service = getService(locale, slug);
  return {
    title: service?.title ?? getContent(locale).nav[2].label,
    description: service?.summary
  };
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const service = getService(locale, slug);

  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const related = content.services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={content.servicePage.heroLabel}
        title={service.title}
        text={service.summary}
        image="/images/engineering-hero.png"
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[.78fr_1.22fr]">
          <div className="surface h-fit rounded-lg p-6">
            <Icon className="size-10 text-orange" />
            <h2 className="mt-5 text-2xl font-bold">{service.title}</h2>
            <p className="mt-4 leading-8 text-muted-foreground">{service.overview}</p>
          </div>
          <div className="space-y-10">
            <div>
              <SectionHeader title={content.servicePage.benefitsTitle} />
              <div className="mt-6 grid gap-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 rounded-lg border border-border bg-card p-5">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-orange" />
                    <p className="leading-7 text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader title={content.servicePage.workflowTitle} />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {content.servicePage.workflow.map((item, index) => (
                  <div key={item} className="rounded-lg border border-border bg-card p-5">
                    <Badge variant="accent">{String(index + 1).padStart(2, "0")}</Badge>
                    <p className="mt-4 font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-muted/55">
        <div className="container space-y-8">
          <SectionHeader title={content.servicePage.galleryTitle} />
          <div className="grid gap-5 md:grid-cols-2">
            {["/images/engineering-hero.png", "/images/infrastructure-portfolio.png"].map((image) => (
              <div key={image} className="relative aspect-[1.55] overflow-hidden rounded-lg border border-border bg-card">
                <Image
                  src={image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader title={content.servicePage.faqTitle} />
            <div className="mt-6 space-y-4">
              {content.servicePage.faqs.map((faq) => (
                <details key={faq.question} className="rounded-lg border border-border bg-card p-5">
                  <summary className="cursor-pointer font-bold">{faq.question}</summary>
                  <p className="mt-3 leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title={content.servicePage.relatedTitle} />
            <div className="mt-6 grid gap-4">
              {related.map((item) => (
                <ServiceCard key={item.slug} service={item} locale={locale} readMore={content.actions.readMore} />
              ))}
            </div>
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
