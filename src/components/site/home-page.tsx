import Image from "next/image";
import {ArrowUpRight, CheckCircle2} from "lucide-react";
import {AnimatedCounter} from "@/components/site/animated-counter";
import {CtaBand} from "@/components/site/cta-band";
import {PortfolioBrowser} from "@/components/site/portfolio-browser";
import {Reveal} from "@/components/site/reveal";
import {SectionHeader} from "@/components/site/section-header";
import {ServiceCard} from "@/components/site/service-card";
import {TestimonialsCarousel} from "@/components/site/testimonials-carousel";
import {V2PlatformSection} from "@/components/site/v2-platform-section";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Link} from "@/i18n/routing";
import {iconMap, type SiteContent} from "@/lib/content";
import type {Locale} from "@/i18n/routing";

export function HomePage({
  content,
  locale
}: {
  content: SiteContent;
  locale: string;
}) {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-primary pt-28 text-primary-foreground">
        <Image
          src="/images/engineering-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-52"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/84 to-primary/22 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-grid-soft opacity-20" />
        <div className="container relative grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-14 lg:grid-cols-[1.06fr_.94fr]">
          <div className="max-w-3xl space-y-8">
            <Badge variant="accent">{content.home.heroKicker}</Badge>
            <h1 className="text-balance text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              {content.home.heroTitle}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-primary-foreground/78">
              {content.home.heroText}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <Link href="/quote" locale={locale}>
                  {content.actions.quote}
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/25 bg-white/10 text-white hover:bg-white/16">
                <Link href="/services" locale={locale}>
                  {content.actions.exploreServices}
                </Link>
              </Button>
            </div>
          </div>

          <div className="surface hidden rounded-lg p-4 text-primary lg:block">
            <div className="rounded-md bg-background p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-bold text-muted-foreground">{content.shortBrand}</span>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-orange">
                  {content.actions.live}
                </span>
              </div>
              <div className="space-y-3">
                {content.why.slice(0, 3).map((item) => (
                  <div key={item.title} className="flex gap-3 rounded-md border border-border bg-card p-4">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-orange" />
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.home.stats.map((stat) => (
            <div key={stat.label} className="metric-card">
              <p className="text-3xl font-black text-primary dark:text-foreground">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} locale={locale} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <V2PlatformSection locale={locale} />

      <section className="section">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow={content.nav[2].label}
            title={content.home.sections.servicesTitle}
            text={content.home.sections.servicesText}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.services.slice(0, 6).map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <ServiceCard service={service} locale={locale} readMore={content.actions.readMore} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/55">
        <div className="container grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-start">
          <SectionHeader
            eyebrow={content.home.sections.whyTitle}
            title={content.home.sections.whyTitle}
            text={content.home.sections.whyText}
          />
          <div className="relative space-y-5 before:absolute before:bottom-0 before:top-0 before:w-px before:bg-border ltr:before:left-5 rtl:before:right-5">
            {content.why.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="relative flex gap-5">
                  <span className="z-10 grid size-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                    {index + 1}
                  </span>
                  <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow={content.nav[3].label}
            title={content.home.sections.portfolioTitle}
            text={content.actions.viewPortfolio}
          />
          <PortfolioBrowser projects={content.portfolio} locale={locale} labels={content.actions} />
        </div>
      </section>

      <section className="section bg-primary text-primary-foreground">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow={content.nav[4].label}
            title={content.home.sections.industriesTitle}
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.industries.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <div key={industry.title} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                  <Icon className="size-6 text-accent" />
                  <h3 className="mt-4 text-xl font-bold">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/70">{industry.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <SectionHeader
            eyebrow={content.home.sections.testimonialsTitle}
            title={content.home.sections.testimonialsTitle}
          />
          <TestimonialsCarousel testimonials={content.testimonials} />
        </div>
      </section>

      <section className="section bg-muted/55">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow={content.home.sections.processTitle}
            title={content.home.sections.processTitle}
            align="center"
          />
          <div className="grid gap-4 md:grid-cols-5">
            {content.process.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-border bg-card p-5">
                <span className="text-sm font-black text-orange">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
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
