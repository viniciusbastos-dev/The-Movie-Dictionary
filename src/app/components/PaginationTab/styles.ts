"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 40%;
  z-index: 10;
  right: 30px;
`;

export const Span = styled.span`
  margin-left: 8px;
`;

export const PageNumber = styled.div<any>`
  cursor: pointer;
  font-size: ${({ $active }) => ($active ? "16px" : "12px")};
  color: ${({ $active, theme }) => ($active ? "white" : theme.colors.gray400)};
  position: relative;
  display: flex;
  align-items: center;
  transition: 0.3s;

  ${({ $active }) =>
    $active &&
    `
  &::before {
      content: "";
      display: block;
     
      transition: 0.3s;
      height: 3px;
      width: 20px;
      border-radius: 6px;
      position: absolute;
      left: -20px;
      background-color: white;
    }
    `}
`;
