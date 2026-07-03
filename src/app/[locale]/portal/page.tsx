import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {ArrowUpRight, Bell, FileArchive, FolderKanban, MessageSquare, UploadCloud} from "lucide-react";
import {PortalAccessForm} from "@/components/forms/portal-access-form";
import {PageHero} from "@/components/site/page-hero";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {getContent} from "@/lib/content";
import {getV2Content} from "@/lib/v2-content";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const v2 = getV2Content(locale);
  return {title: v2.portal.eyebrow, description: v2.portal.text};
}

export default async function PortalPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const v2 = getV2Content(locale);

  return (
    <>
      <PageHero
        eyebrow={v2.portal.eyebrow}
        title={v2.portal.title}
        text={v2.portal.text}
        image="/images/engineering-hero.png"
      />

      <section className="section bg-muted/45">
        <div className="container grid gap-10 lg:grid-cols-[.42fr_.58fr]">
          <div className="space-y-5">
            <PortalAccessForm portal={v2.portal} />
            <div className="premium-panel p-6">
              <Bell className="size-7 text-orange" />
              <h2 className="mt-4 text-xl font-bold">{v2.portal.quickActionsTitle}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {v2.portal.quickActions.map((action, index) => (
                  <Button
                    key={action}
                    variant={index === 0 ? "accent" : "outline"}
                    className="justify-between"
                  >
                    {index === 0 ? <UploadCloud /> : <ArrowUpRight />}
                    {action}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="premium-panel bg-precision-mesh p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <Badge variant="accent">{v2.version}</Badge>
                  <h2 className="mt-4 text-3xl font-bold">{v2.portal.dashboardTitle}</h2>
                  <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                    {v2.portal.dashboardText}
                  </p>
                </div>
                <Badge variant="outline">{content.shortBrand}</Badge>
              </div>
              <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {v2.portal.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-border bg-card/88 p-4 backdrop-blur">
                    <p className="text-3xl font-black">{metric.value}</p>
                    <p className="mt-1 text-sm font-semibold">{metric.label}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{metric.hint}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.18fr_.82fr]">
              <div className="premium-panel p-0">
                <div className="flex items-center justify-between border-b border-border p-5">
                  <div className="flex items-center gap-3">
                    <FolderKanban className="size-5 text-orange" />
                    <h2 className="text-xl font-bold">{v2.portal.projectsTitle}</h2>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="dashboard-table">
                    <thead>
                      <tr>
                        <th>{content.forms.description}</th>
                        <th>{content.forms.timeline}</th>
                        <th>{content.forms.company}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {v2.portal.projects.map((project) => (
                        <tr key={project.name}>
                          <td>
                            <p className="font-bold">{project.name}</p>
                            <div className="mt-3 h-2 rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-accent"
                                style={{width: `${project.progress}%`}}
                              />
                            </div>
                          </td>
                          <td>
                            <span className="status-chip">{project.status}</span>
                            <p className="mt-2 text-xs text-muted-foreground">{project.due}</p>
                          </td>
                          <td className="text-muted-foreground">{project.manager}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <div className="premium-panel p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <FileArchive className="size-5 text-orange" />
                    <h2 className="text-xl font-bold">{v2.portal.documentsTitle}</h2>
                  </div>
                  <div className="space-y-3">
                    {v2.portal.documents.map((document) => (
                      <div key={document.name} className="rounded-md border border-border bg-background/75 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-semibold">{document.name}</p>
                          <Badge variant="outline">{document.type}</Badge>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">{document.status}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="premium-panel p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <MessageSquare className="size-5 text-orange" />
                    <h2 className="text-xl font-bold">{v2.portal.messagesTitle}</h2>
                  </div>
                  <div className="space-y-3">
                    {v2.portal.messages.map((message) => (
                      <p key={message} className="rounded-md bg-muted/65 p-4 text-sm leading-6 text-muted-foreground">
                        {message}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
