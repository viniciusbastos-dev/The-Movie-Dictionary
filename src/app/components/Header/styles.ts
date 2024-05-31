"use client";

import styled from "styled-components";

export const Container = styled.nav<any>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 5;
  padding: 22px 95px;

  @media screen and (max-width: 1024px) {
    padding: 22px 48px;
  }

  @media screen and (max-width: 640px) {
    padding: 16px 24px;
  }
`;

export const LeftRow = styled.div`
  justify-self: left;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const RightRow = styled.div`
  justify-self: right;
  display: flex;
  align-items: center;
  gap: 24px;

  a {
    font-weight: 700;
  }
`;

export const Title = styled.h1`
  font-size: 24px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const Pressable = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.rose700};
`;
