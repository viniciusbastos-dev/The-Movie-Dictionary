"use client";

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Body = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
`;

export const ReleaseDate = styled.h3`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: 700;

  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray900};

  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
`;

export const Votes = styled.p`
  font-size: 12px;
`;

export const FavoriteButton = styled.button<any>`
  position: absolute;
  top: 16px;
  right: 16px;
  color: ${({ favorite, theme }) =>
    !favorite ? theme.colors.gray300 : "#ff0000"};
  background-color: rgba(243, 244, 246, 0.6);
  width: 30px;
  height: 30px;
  border-radius: 9999px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
