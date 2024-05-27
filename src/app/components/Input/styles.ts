"use client";

import styled from "styled-components";

export const Container = styled.div<any>`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 6px;
  padding: 6px 10px;
  gap: 8px;
  width: 100%;

  ${({ $width }) => $width && `max-width: ${$width}px;`};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const Field = styled.input`
  color: #fff;
  font-size: 16px;
  font-family: var(--font-DMSans);
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

export const Pressable = styled.button`
  color: #fff;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
`;
