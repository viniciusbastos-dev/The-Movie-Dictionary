"use client";

import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.7;
`;

export const Container = styled.section<any>`
  position: relative;
  height: 600px;
  z-index: 5;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

export const Wrapper = styled.div`
  padding-left: 6rem;
  padding-top: 4rem;
  height: calc(100% - 94px);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 600px;
  position: relative;
  z-index: 5;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
`;

export const Votes = styled.h2`
  font-size: 12px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  max-width: 500px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-height: 1.2em;
`;
