"use client";

import {useMemo, useState} from "react";
import {Calendar, Clock} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Input} from "@/components/ui/input";
import {Link} from "@/i18n/routing";
import {readingTime} from "@/lib/utils";
import type {Locale} from "@/i18n/routing";
import type {BlogPost, SiteContent} from "@/lib/content";

export function BlogBrowser({
  posts,
  locale,
  labels
}: {
  posts: readonly BlogPost[];
  locale: string;
  labels: SiteContent["actions"];
}) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return posts;
    return posts.filter((post) =>
      [post.title, post.excerpt, post.category].join(" ").toLowerCase().includes(normalized)
    );
  }, [posts, query]);

  return (
    <div className="space-y-8">
      <div className="max-w-xl">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={labels.search}
          aria-label={labels.search}
        />
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {filtered.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            locale={locale}
            className={`group rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-lift ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <Badge variant="accent">{post.category}</Badge>
            <h3 className="mt-5 text-2xl font-bold leading-tight group-hover:text-orange">
              {post.title}
            </h3>
            <p className="mt-4 leading-7 text-muted-foreground">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="size-4" />
                {post.published}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="size-4" />
                {readingTime(`${post.excerpt} ${post.body}`)} {labels.minRead}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
