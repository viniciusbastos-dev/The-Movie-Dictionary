"use client";
import styled from "styled-components";

export const Container = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #37c6f3;
  color: #fff;
  font-family: var(--font-roboto);
  font-size: 25px;
  font-weight: 500;
  padding: 16px;
  width: 100%;

  &:hover {
    background-color: ${(props) => (!props.disabled ? "#34bae4" : " #37c6f3")};
  }

  &:disabled {
    opacity: 0.7;
  }
`;
