import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {Calendar, Clock} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {CtaBand} from "@/components/site/cta-band";
import {PageHero} from "@/components/site/page-hero";
import {readingTime} from "@/lib/utils";
import {getContent, getPost} from "@/lib/content";
import {routing, type Locale} from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getContent(locale).blog.map((post) => ({locale, slug: post.slug}))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}): Promise<Metadata> {
  const {locale, slug} = await params;
  const post = getPost(locale, slug);
  return {title: post?.title ?? getContent(locale).nav[5].label, description: post?.excerpt};
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const post = getPost(locale, slug);

  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} text={post.excerpt} />
      <article className="section">
        <div className="container max-w-3xl">
          <div className="mb-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Badge variant="accent">{post.category}</Badge>
            <span className="flex items-center gap-2">
              <Calendar className="size-4" />
              {post.published}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-4" />
              {readingTime(`${post.excerpt} ${post.body}`)} {content.actions.minRead}
            </span>
          </div>
          <p className="text-xl leading-9 text-muted-foreground">{post.body}</p>
        </div>
      </article>
      <CtaBand
        title={content.home.sections.ctaTitle}
        text={content.home.sections.ctaText}
        action={content.actions.quote}
        locale={locale}
      />
    </>
  );
}
