"use client";

import styled from "styled-components";

export const Container = styled.div`
  padding: 0 8%;

  margin-bottom: 64px;
  .media-swiper {
    padding: 0 30px;
  }

  .media-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    max-width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 36px;
  margin-bottom: 44px;
`;
