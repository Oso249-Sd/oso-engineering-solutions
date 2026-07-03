"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {ShieldCheck} from "lucide-react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import type {V2Content} from "@/lib/v2-content";

export function PortalAccessForm({
  portal
}: {
  portal: V2Content["portal"];
}) {
  const [ready, setReady] = useState(false);
  const schema = z.object({
    clientId: z.string().min(2),
    accessCode: z.string().min(4),
    remember: z.boolean().optional()
  });
  type Values = z.infer<typeof schema>;
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {remember: true}
  });

  return (
    <form
      className="premium-panel space-y-5 p-6"
      onSubmit={form.handleSubmit(() => setReady(true))}
    >
      <div>
        <p className="eyebrow">{portal.signIn}</p>
        <h2 className="mt-3 text-2xl font-bold">{portal.dashboardTitle}</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{portal.secureNote}</p>
      </div>
      <label className="space-y-2 text-sm font-semibold">
        <span>{portal.clientId}</span>
        <Input {...form.register("clientId")} />
      </label>
      <label className="space-y-2 text-sm font-semibold">
        <span>{portal.accessCode}</span>
        <Input type="password" {...form.register("accessCode")} />
      </label>
      <label className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
        <input
          type="checkbox"
          className="size-4 accent-orange"
          {...form.register("remember")}
        />
        {portal.remember}
      </label>
      {ready ? (
        <div className="flex items-center gap-3 rounded-md bg-accent/12 p-3 text-sm font-semibold text-orange">
          <ShieldCheck className="size-5" />
          {portal.success}
        </div>
      ) : null}
      <Button type="submit" variant="accent" className="w-full">
        {portal.open}
      </Button>
    </form>
  );
}
