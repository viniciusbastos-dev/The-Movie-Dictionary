import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  rightComponent?: React.ReactNode;
  children?: React.ReactNode;
}
const SectionContainer: React.FC<Props> = ({
  title,
  subtitle,
  rightComponent,
  className,
  children,
  ...rest
}) => {
  return (
    <section
      {...rest}
      className={cn("mx-[8%] mb-20 lg:mb-32 xl:mb-36", className)}
    >
      <div className="flex justify-between items-end flex-wrap gap-6 section-mb-clamp">
        <div className="flex flex-col gap-3">
          <h2 className="~xs/xl:~text-2xl/4xl font-bold">{title}</h2>
          {subtitle && (
            <p className="small-subtitle-clamped text-gray-60 text-csm">
              {subtitle}
            </p>
          )}
        </div>
        {rightComponent}
      </div>
      {children}
    </section>
  );
};

export default SectionContainer;
