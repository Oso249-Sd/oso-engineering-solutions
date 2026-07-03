import Image from "next/image";
import {Badge} from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  text,
  image = "/images/infrastructure-portfolio.png"
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 text-primary-foreground">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-36" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/88 to-primary/45 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-grid-soft opacity-20" />
      </div>
      <div className="container relative pb-20 pt-10 sm:pb-24">
        <div className="max-w-3xl space-y-6">
          <Badge variant="accent">{eyebrow}</Badge>
          <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-primary-foreground/78">{text}</p>
        </div>
      </div>
    </section>
  );
}
