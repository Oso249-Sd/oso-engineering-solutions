"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {CheckCircle2, UploadCloud} from "lucide-react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import type {SiteContent} from "@/lib/content";

export function QuoteForm({content}: {content: SiteContent}) {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const labels = {...content.forms, ...content.actions};
  const schema = z.object({
    service: z.string().min(1, labels.required),
    budget: z.string().min(1, labels.required),
    country: z.string().min(2, labels.required),
    timeline: z.string().min(1, labels.required),
    name: z.string().min(2, labels.required),
    email: z.string().email(labels.invalidEmail),
    phone: z.string().optional(),
    description: z.string().min(10, labels.required),
    files: z.any().optional()
  });
  type Values = z.infer<typeof schema>;
  const form = useForm<Values>({resolver: zodResolver(schema), mode: "onChange"});
  const steps = [
    [labels.service, labels.budget, labels.country, labels.timeline],
    [labels.name, labels.email, labels.phone],
    [labels.description, labels.upload]
  ];

  const next = async () => {
    const fields =
      step === 0
        ? (["service", "budget", "country", "timeline"] as const)
        : (["name", "email"] as const);
    const valid = await form.trigger(fields);
    if (valid) setStep((value) => Math.min(value + 1, steps.length - 1));
  };const onSubmit = async (values: Values) => {
  try {
    setLoading(true);

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service: values.service,
        budget: values.budget,
        timeline: values.timeline,
        country: values.country,
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: "",
        message: values.description,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send quote.");
    }

    form.reset();
    setStep(0);
    setSent(true);
  } catch (error) {
    alert("Unable to send your request. Please try again.");
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <form
      className="surface space-y-7 rounded-lg p-6 md:p-8"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="flex gap-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded-full ${index <= step ? "bg-accent" : "bg-muted"}`}
          />
        ))}
      </div>

      <p className="text-sm font-semibold text-muted-foreground">
        {labels.step} {step + 1} / {steps.length}
      </p>

      {step === 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={labels.service} error={form.formState.errors.service?.message}>
            <Select {...form.register("service")}>
              <option value="">{labels.service}</option>
              {content.services.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
            </Select>
          </Field>
          <Field label={labels.budget} error={form.formState.errors.budget?.message}>
            <Select {...form.register("budget")}>
              <option value="">{labels.budget}</option>
              {content.forms.budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
          <Field label={labels.country} error={form.formState.errors.country?.message}>
            <Input {...form.register("country")} />
          </Field>
          <Field label={labels.timeline} error={form.formState.errors.timeline?.message}>
            <Select {...form.register("timeline")}>
              <option value="">{labels.timeline}</option>
              {content.forms.timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={labels.name} error={form.formState.errors.name?.message}>
            <Input {...form.register("name")} />
          </Field>
          <Field label={labels.email} error={form.formState.errors.email?.message}>
            <Input type="email" {...form.register("email")} />
          </Field>
          <Field label={labels.phone}>
            <Input {...form.register("phone")} />
          </Field>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-4">
          <Field label={labels.description} error={form.formState.errors.description?.message}>
            <Textarea {...form.register("description")} />
          </Field>
          <label className="flex min-h-32 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted/50 p-6 text-center text-sm font-semibold text-muted-foreground">
            <UploadCloud className="size-8 text-orange" />
            <span>{labels.upload}</span>
            <Input
              type="file"
              multiple
              accept=".pdf,.zip,.dwg,.dxf,.png,.jpg,.jpeg"
              className="sr-only"
              {...form.register("files")}
            />
          </label>
        </div>
      ) : null}

      {sent ? (
        <div className="flex items-center gap-3 rounded-lg bg-accent/12 p-4 text-sm font-semibold text-orange">
          <CheckCircle2 className="size-5" />
          {labels.success}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        {step > 0 ? (
          <Button type="button" variant="outline" onClick={() => setStep((value) => value - 1)}>
            {labels.previous}
          </Button>
        ) : null}
        {step < steps.length - 1 ? (
          <Button type="button" variant="accent" onClick={next}>
            {labels.next}
          </Button>
        ) : (
          <Button
  type="submit"
  variant="accent"
  disabled={loading}
>
  {loading ? "Sending..." : labels.quote}
</Button>
        )}
      </div>
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
