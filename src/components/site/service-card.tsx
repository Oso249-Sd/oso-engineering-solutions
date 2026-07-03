import {ArrowUpRight} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Link} from "@/i18n/routing";
import {iconMap, type Service} from "@/lib/content";
import type {Locale} from "@/i18n/routing";

export function ServiceCard({
  service,
  locale,
  readMore
}: {
  service: Service;
  locale: string;
  readMore: string;
}) {
  const Icon = iconMap[service.icon];

  return (
    <Link href={`/services/${service.slug}`} locale={locale} className="group block h-full">
      <Card className="surface h-full overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-accent/60">
        <CardHeader>
          <div className="mb-4 flex items-center justify-between">
            <span className="grid size-12 place-items-center rounded-md bg-accent/14 text-orange">
              <Icon className="size-5" />
            </span>
            <ArrowUpRight className="size-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange rtl:group-hover:-translate-x-1 rtl:group-hover:translate-x-0" />
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="leading-7 text-muted-foreground">{service.summary}</p>
          <span className="inline-flex text-sm font-semibold text-orange">{readMore}</span>
        </CardContent>
      </Card>
    </Link>
  );
}
