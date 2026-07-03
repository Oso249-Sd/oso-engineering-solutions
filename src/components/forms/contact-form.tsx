"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import type {SiteContent} from "@/lib/content";

export function ContactForm({labels}: {labels: SiteContent["forms"] & SiteContent["actions"]}) {
  const [sent, setSent] = useState(false);
  const schema = z.object({
    name: z.string().min(2, labels.required),
    email: z.string().email(labels.invalidEmail),
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
        <label className="space-y-2 text-sm font-semibold">
          <span>{labels.name}</span>
          <Input {...form.register("name")} />
          {form.formState.errors.name ? (
            <span className="text-xs text-orange">{form.formState.errors.name.message}</span>
          ) : null}
        </label>
        <label className="space-y-2 text-sm font-semibold">
          <span>{labels.email}</span>
          <Input type="email" {...form.register("email")} />
          {form.formState.errors.email ? (
            <span className="text-xs text-orange">{form.formState.errors.email.message}</span>
          ) : null}
        </label>
      </div>
      <label className="space-y-2 text-sm font-semibold">
        <span>{labels.message}</span>
        <Textarea {...form.register("message")} />
        {form.formState.errors.message ? (
          <span className="text-xs text-orange">{form.formState.errors.message.message}</span>
        ) : null}
      </label>
      {sent ? <p className="rounded-md bg-accent/12 p-3 text-sm font-semibold text-orange">{labels.success}</p> : null}
      <Button type="submit" variant="accent">{labels.sendMessage}</Button>
    </form>
  );
}
