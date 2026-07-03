"use client";

import Image from "next/image";
import {useMemo, useState} from "react";
import {ArrowUpRight} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Link} from "@/i18n/routing";
import type {Locale} from "@/i18n/routing";
import type {PortfolioProject, SiteContent} from "@/lib/content";

export function PortfolioBrowser({
  projects,
  locale,
  labels
}: {
  projects: readonly PortfolioProject[];
  locale: string;
  labels: SiteContent["actions"];
}) {
  const categories = useMemo(
    () => [labels.all, ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects, labels.all]
  );
  const [active, setActive] = useState(categories[0]);
  const filtered =
    active === labels.all ? projects : projects.filter((project) => project.category === active);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            type="button"
            size="sm"
            variant={active === category ? "accent" : "outline"}
            onClick={() => setActive(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            locale={locale}
            className={`group block overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lift ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative aspect-[1.35] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/78 via-navy/16 to-transparent" />
              <Badge variant="accent" className="absolute top-4 ltr:left-4 rtl:right-4">
                {project.category}
              </Badge>
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-orange" />
              </div>
              <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                {project.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
