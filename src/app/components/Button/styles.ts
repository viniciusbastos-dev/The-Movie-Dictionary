"use client";

import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.rose700};
  outline: none;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  color: #fff;
  font-weight: 700;
  font-family: var(--font-DMSans);
  text-transform: uppercase;
  font-size: 14px;
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.colors.rose900};
  }

  &:disabled {
    cursor: auto;
  }
`;
