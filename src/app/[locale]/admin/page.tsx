import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {Activity, AlertTriangle, BarChart3, CircleDollarSign, Gauge, Inbox, UsersRound} from "lucide-react";
import {PageHero} from "@/components/site/page-hero";
import {Badge} from "@/components/ui/badge";
import {getContent} from "@/lib/content";
import {getV2Content} from "@/lib/v2-content";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const v2 = getV2Content(locale);
  return {title: v2.admin.eyebrow, description: v2.admin.text};
}

export default async function AdminPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const v2 = getV2Content(locale);
  const metricIcons = [CircleDollarSign, Inbox, Gauge, UsersRound];

  return (
    <>
      <PageHero
        eyebrow={v2.admin.eyebrow}
        title={v2.admin.title}
        text={v2.admin.text}
        image="/images/infrastructure-portfolio.png"
      />

      <section className="section bg-muted/45">
        <div className="container space-y-6">
          <div className="premium-panel bg-precision-mesh p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Badge variant="accent">{v2.version}</Badge>
                <h2 className="mt-4 text-3xl font-bold">{v2.admin.dashboardTitle}</h2>
                <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">
                  {v2.admin.dashboardText}
                </p>
              </div>
              <Badge variant="outline">{content.shortBrand}</Badge>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {v2.admin.metrics.map((metric, index) => {
                const Icon = metricIcons[index];
                return (
                  <div key={metric.label} className="metric-card bg-card/88">
                    <Icon className="size-6 text-orange" />
                    <p className="mt-5 text-3xl font-black">{metric.value}</p>
                    <p className="mt-1 text-sm font-semibold">{metric.label}</p>
                    <p className="mt-2 text-xs font-bold text-[hsl(var(--success))]">{metric.change}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="premium-panel p-6">
              <div className="mb-6 flex items-center gap-3">
                <BarChart3 className="size-6 text-orange" />
                <h2 className="text-2xl font-bold">{v2.admin.pipelineTitle}</h2>
              </div>
              <div className="space-y-4">
                {v2.admin.pipeline.map((stage, index) => (
                  <div key={stage.stage}>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <p className="font-semibold">{stage.stage}</p>
                      <p className="text-sm font-bold text-orange">{stage.value}</p>
                    </div>
                    <div className="h-3 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{width: `${Math.min(95, 38 + index * 17)}%`}}
                      />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{stage.count}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-panel p-6">
              <div className="mb-6 flex items-center gap-3">
                <Activity className="size-6 text-orange" />
                <h2 className="text-2xl font-bold">{v2.admin.workloadTitle}</h2>
              </div>
              <div className="space-y-4">
                {v2.admin.workload.map((team) => (
                  <div key={team.team} className="rounded-lg border border-border bg-background/75 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-bold">{team.team}</p>
                      <span className="status-chip">{team.status}</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-muted">
                      <div className="h-full rounded-full bg-accent" style={{width: `${team.load}%`}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.12fr_.88fr]">
            <div className="premium-panel p-0">
              <div className="flex items-center gap-3 border-b border-border p-5">
                <Inbox className="size-5 text-orange" />
                <h2 className="text-xl font-bold">{v2.admin.inquiriesTitle}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>{content.forms.company}</th>
                      <th>{content.forms.service}</th>
                      <th>{content.forms.timeline}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {v2.admin.inquiries.map((inquiry) => (
                      <tr key={inquiry.client}>
                        <td className="font-bold">{inquiry.client}</td>
                        <td className="text-muted-foreground">{inquiry.service}</td>
                        <td>
                          <Badge variant="accent">{inquiry.priority}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="premium-panel p-6">
              <div className="mb-6 flex items-center gap-3">
                <AlertTriangle className="size-6 text-orange" />
                <h2 className="text-2xl font-bold">{v2.admin.alertsTitle}</h2>
              </div>
              <div className="space-y-3">
                {v2.admin.alerts.map((alert) => (
                  <p key={alert} className="rounded-md border border-border bg-background/75 p-4 text-sm leading-6 text-muted-foreground">
                    {alert}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
