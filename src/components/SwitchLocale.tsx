"use client";
import React, { ChangeEvent, useTransition } from "react";
import styles from "./index.module.css";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function SwitchLocale() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale,
      });
    });
  };
  return (
    <select
      defaultValue={localeActive}
      onChange={onSelectChange}
      className="bg-black-6 p-2 rounded-lg self-center"
    >
      <option value="en-US">English</option>
      <option value={"pt-BR"}>Portuguese</option>
    </select>
  );
}
