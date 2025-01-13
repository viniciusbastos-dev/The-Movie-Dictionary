"use client";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

interface Props {}
const ToggleListView: React.FC<Props> = () => {
  const t = useTranslations("MoviesPage");
  const isMobile = useIsMobile();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selected = searchParams.get("type");

  const handleToggle = (value: string) => {
    if (value) {
      router.push(`?type=${value}`, { scroll: false });
    }
  };

  if (!isMobile) return null;

  return (
    <div className="justify-center flex mb-12">
      <ToggleGroup
        type="single"
        value={selected ?? "movie"}
        onValueChange={handleToggle}
      >
        <ToggleGroupItem value="movie">{t("movies")}</ToggleGroupItem>
        <ToggleGroupItem value="tv">{t("show")}</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ToggleListView;
