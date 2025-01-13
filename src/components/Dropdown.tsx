"use client";

import React, { useEffect, useRef, useState } from "react";
import { MinusIcon, PlusIcon } from "@/assets/SVG";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface Props {
  data: {
    number: number;
    questionKey: string;
    answerKey: string;
  };
}

const Dropdown: React.FC<Props> = ({ data }) => {
  const t = useTranslations("FAQ");
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="question relative px-3 py-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 lg:gap-5 items-center">
          <span className="bg-black-12 border-black-15 border inline-block rounded-xl text-c16-20 font-semibold self-start p-3 lg:p-4 xl:p-5">
            0{data.number}
          </span>
          <h3 className="text-cmd">{t(data?.questionKey)}</h3>
        </div>
        <button
          onClick={toggleDropdown}
          aria-label={isOpen ? "Fechar dropdown" : "Abrir dropdown"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <MinusIcon size="size-6 lg:size-8" />
          ) : (
            <PlusIcon size="size-6 lg:size-8" />
          )}
        </button>
      </div>
      <div
        ref={contentRef}
        className={cn(
          "mt-3 overflow-hidden transition-all",
          isOpen ? "h-auto" : "h-0"
        )}
      >
        <p className="text-gray-60 text-csm ">{t(data?.answerKey)}</p>
      </div>
    </div>
  );
};

export default Dropdown;
