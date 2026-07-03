"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import type {SiteContent} from "@/lib/content";

export function ApplicationForm({
  labels
}: {
  labels: SiteContent["forms"] & SiteContent["actions"];
}) {
  const [sent, setSent] = useState(false);
  const schema = z.object({
    name: z.string().min(2, labels.required),
    email: z.string().email(labels.invalidEmail),
    role: z.string().min(2, labels.required),
    portfolio: z.string().optional(),
    message: z.string().min(10, labels.required)
  });
  type Values = z.infer<typeof schema>;
  const form = useForm<Values>({resolver: zodResolver(schema)});

  return (
    <form
      className="surface space-y-5 rounded-lg p-6"
      onSubmit={form.handleSubmit(() => setSent(true))}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={labels.name} error={form.formState.errors.name?.message}>
          <Input {...form.register("name")} />
        </Field>
        <Field label={labels.email} error={form.formState.errors.email?.message}>
          <Input type="email" {...form.register("email")} />
        </Field>
        <Field label={labels.role} error={form.formState.errors.role?.message}>
          <Input {...form.register("role")} />
        </Field>
        <Field label={labels.portfolio}>
          <Input {...form.register("portfolio")} />
        </Field>
      </div>
      <Field label={labels.message} error={form.formState.errors.message?.message}>
        <Textarea {...form.register("message")} />
      </Field>
      {sent ? <p className="rounded-md bg-accent/12 p-3 text-sm font-semibold text-orange">{labels.success}</p> : null}
      <Button type="submit" variant="accent">{labels.applyNow}</Button>
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="space-y-2 text-sm font-semibold">
      <span>{label}</span>
      {children}
      {error ? <span className="text-xs text-orange">{error}</span> : null}
    </label>
  );
}
