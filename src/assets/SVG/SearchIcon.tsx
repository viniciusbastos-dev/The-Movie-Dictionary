import React from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const SearchIcon = ({ fill = "#FFF", size = 34 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m29.75 29.75-7.362-7.362m0 0a10.591 10.591 0 0 0 3.112-7.513c0-5.868-4.757-10.625-10.625-10.625S4.25 9.007 4.25 14.875 9.007 25.5 14.875 25.5c2.934 0 5.59-1.19 7.513-3.112Z"
    />
  </svg>
);
