"use client";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #d9d9d9;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 16px 24px;
  width: 630px;
`;

export const TextField = styled.input`
  font-family: var(--font-roboto);
  font-size: 20px;
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
`;

export const Pressable = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
