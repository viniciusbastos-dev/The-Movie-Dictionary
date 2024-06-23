"use client";

import React, { useEffect, useState } from "react";

const SliderWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isBrowser, setIsBrowser] = useState<boolean | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined" && isBrowser === null) {
      setIsBrowser(true);
    }
  }, [isBrowser]);

  if (isBrowser === null) return null;

  return <div className="swiper-slide">{children}</div>;
};

export default SliderWrapper;
