import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {BlogBrowser} from "@/components/site/blog-browser";
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
  return {title: content.nav[5].label, description: content.actions.search};
}

export default async function BlogPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <>
      <PageHero
        eyebrow={content.nav[5].label}
        title={content.nav[5].label}
        text={content.home.sections.servicesText}
      />
      <section className="section">
        <div className="container">
          <BlogBrowser posts={content.blog} locale={locale} labels={content.actions} />
        </div>
      </section>
    </>
  );
}
