import React from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const NotificationIcon = ({ fill = "#FFF", size = 34 }: Props) => (
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
      d="M21.047 24.2a33.79 33.79 0 0 0 7.727-1.857 12.703 12.703 0 0 1-3.274-8.53V12.75a8.5 8.5 0 0 0-17 0v1.063c0 3.28-1.24 6.271-3.275 8.53a33.79 33.79 0 0 0 7.728 1.856m8.094 0a34.358 34.358 0 0 1-8.094 0m8.094 0a4.25 4.25 0 1 1-8.094 0"
    />
  </svg>
);
