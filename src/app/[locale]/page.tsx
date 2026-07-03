import {setRequestLocale} from "next-intl/server";
import {HomePage} from "@/components/site/home-page";
import {getContent} from "@/lib/content";
import type {Locale} from "@/i18n/routing";

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return <HomePage content={getContent(locale)} locale={locale} />;
}
