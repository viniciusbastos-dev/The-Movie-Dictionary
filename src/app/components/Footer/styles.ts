"use client";

import styled from "styled-components";

export const Container = styled.footer`
  padding: 2rem;
  text-align: center;
`;

export const Copyright = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray500};
`;
