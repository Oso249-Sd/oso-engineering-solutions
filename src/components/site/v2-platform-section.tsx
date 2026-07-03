import {Activity, ArrowUpRight, FileCheck2, LayoutDashboard, LockKeyhole} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Link} from "@/i18n/routing";
import {getV2Content} from "@/lib/v2-content";

export function V2PlatformSection({locale}: {locale: string}) {
  const v2 = getV2Content(locale);
  const cards = [
    {
      icon: LockKeyhole,
      title: v2.home.portalTitle,
      text: v2.home.portalText,
      href: "/portal",
      action: v2.portal.open
    },
    {
      icon: LayoutDashboard,
      title: v2.home.adminTitle,
      text: v2.home.adminText,
      href: "/admin",
      action: v2.admin.open
    },
    {
      icon: Activity,
      title: v2.home.intelligenceTitle,
      text: v2.home.intelligenceText,
      href: "/quote",
      action: v2.portal.quickActions[2]
    }
  ];

  return (
    <section className="section bg-muted/45">
      <div className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">{v2.version}</p>
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-5xl">
              {v2.home.platformTitle}
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">{v2.home.platformText}</p>
          </div>
          <div className="premium-panel bg-precision-mesh p-5">
            <div className="rounded-md bg-card/85 p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="status-chip">{v2.version}</span>
                <FileCheck2 className="size-6 text-orange" />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {v2.portal.metrics.slice(0, 3).map((metric) => (
                  <div key={metric.label} className="rounded-md border border-border bg-background/80 p-4">
                    <p className="text-2xl font-black">{metric.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.title} href={card.href} locale={locale} className="group block">
                <div className="metric-card h-full">
                  <Icon className="size-7 text-orange" />
                  <h3 className="mt-5 text-2xl font-bold">{card.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{card.text}</p>
                  <Button variant="link" className="mt-6 text-orange">
                    {card.action}
                    <ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:group-hover:translate-x-0" />
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
