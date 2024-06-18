import React from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const ArrowLeft = ({ fill = "#FFF", size = 24 }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5 12L4.5 12M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
