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
  return {title: content.legal.privacyTitle, description: content.legal.privacy};
}

export default async function PrivacyPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <>
      <PageHero
        eyebrow={content.footer.legal}
        title={content.legal.privacyTitle}
        text={content.legal.privacy}
      />
      <section className="section">
        <div className="container max-w-3xl rounded-lg border border-border bg-card p-7 leading-8 text-muted-foreground">
          {content.legal.privacy}
        </div>
      </section>
    </>
  );
}
