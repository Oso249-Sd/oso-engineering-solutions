import {cn} from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "start",
  className
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="text-lg leading-8 text-muted-foreground">{text}</p> : null}
    </div>
  );
}
