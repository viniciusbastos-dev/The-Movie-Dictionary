import React from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const PlayIcon = ({ fill = "currentColor", size = 20 }: Props) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2Z"
      clipRule="evenodd"
    />
  </svg>
);
