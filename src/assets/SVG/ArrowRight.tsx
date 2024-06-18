import React from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const ArrowRight = ({ fill = "#FFF", size = 24 }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.1001 12L20.1001 12M20.1001 12L13.3501 5.25M20.1001 12L13.3501 18.75"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
