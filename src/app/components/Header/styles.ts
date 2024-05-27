"use client";

import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  z-index: 5;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 22px 95px;
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
`;

export const Title = styled.h1``;

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
