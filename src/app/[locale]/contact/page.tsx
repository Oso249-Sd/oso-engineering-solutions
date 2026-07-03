import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {Clock, Mail, MapPin, MessageCircle, Phone} from "lucide-react";
import {ContactForm} from "@/components/forms/contact-form";
import {PageHero} from "@/components/site/page-hero";
import {Button} from "@/components/ui/button";
import {getContent} from "@/lib/content";
import type {Locale} from "@/i18n/routing";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const content = getContent(locale);
  return {title: content.nav[7].label, description: content.contact.text};
}

export default async function ContactPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const labels = {...content.forms, ...content.actions};
  const contactItems = [
    {Icon: Mail, text: content.contact.email},
    {Icon: Phone, text: content.contact.phone},
    {Icon: MapPin, text: content.contact.address},
    {Icon: Clock, text: content.contact.hours}
  ];

  return (
    <>
      <PageHero eyebrow={content.nav[7].label} title={content.contact.title} text={content.contact.text} />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div className="space-y-5">
            {contactItems.map(({Icon, text}) => (
              <div key={text} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                <Icon className="mt-1 size-5 shrink-0 text-orange" />
                <p className="leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
            <Button asChild variant="accent">
              <a href="https://wa.me/15550124080" target="_blank" rel="noreferrer">
                <MessageCircle />
                {content.contact.whatsapp}
              </a>
            </Button>
            <div className="min-h-72 rounded-lg border border-dashed border-border bg-grid-soft" aria-hidden="true" />
          </div>
          <ContactForm labels={labels} />
        </div>
      </section>
    </>
  );
}
