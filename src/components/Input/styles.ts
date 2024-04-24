"use client";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #d9d9d9;
  border-radius: 20px;

  border: 1px solid transparent;

  &:focus-within {
    border-color: #37c6f3;
  }
`;

export const TextField = styled.input`
  font-family: var(--font-roboto);
  font-size: 20px;
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  padding: 16px 24px;
`;
