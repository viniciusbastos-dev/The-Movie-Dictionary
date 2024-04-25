"use client";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
`;

export const Form = styled.form`
  width: 390px;
  margin-bottom: 20px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
`;

export const Title = styled.h1`
  font-family: "FontSpring", sans-serif;
  font-size: 84px;
`;

export const Text = styled.span`
  color: #6d6d6d;
  font-size: 15px;
  > a {
    color: #6d6d6d;
    font-weight: 700;
    text-decoration: none;
  }
`;
