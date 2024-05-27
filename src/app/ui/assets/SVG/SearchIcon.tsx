import React from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const SearchIcon = ({ fill = "currentColor", size = 16 }: Props) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14 14-4-4m1.333-3.333a4.667 4.667 0 1 1-9.333 0 4.667 4.667 0 0 1 9.333 0Z"
    />
  </svg>
);
