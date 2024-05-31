"use client";

import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.7;

  .autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.rose400};
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: ${({ theme }) => theme.colors.rose400};
    fill: none;
    stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.header<any>`
  position: relative;
  height: 600px;
  z-index: 5;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: 70px;
`;

export const Wrapper = styled.div`
  padding-left: 6rem;
  padding-top: 4rem;
  height: calc(100% - 94px);

  @media screen and (max-width: 640px) {
    padding: 2rem 4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  position: relative;
  z-index: 5;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
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

  @media screen and (max-width: 768px) {
    -webkit-line-clamp: 8;
  }
`;
