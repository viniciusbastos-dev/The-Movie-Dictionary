import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  rightComponent?: React.ReactNode;
  children: React.ReactNode;
}
const SectionContainer: React.FC<Props> = ({
  title,
  subtitle,
  rightComponent,
  children,
  ...rest
}) => {
  return (
    <section {...rest} className="mx-[8%] mb-20 lg:mb-32 xl:mb-36">
      <div className="flex justify-between items-start gap-3 section-mb-clamp">
        <div className="flex flex-col gap-3">
          <h2 className="title-clamped font-bold text-clg">{title}</h2>
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
