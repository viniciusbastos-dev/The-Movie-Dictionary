import React from "react";
import * as S from "./styles";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";

const RegisterUserForm = () => {
  return (
    <S.Container>
      <S.Title>
        The <br />
        Movie <br />
        Dictionary
      </S.Title>
      <S.Form>
        <S.InputWrap>
          <Input placeholder="Usuário" />
          <Input placeholder="Endereço de email" />
          <Input placeholder="Senha" type="password" />
          <Input placeholder="Confirmar senha" type="password" />
        </S.InputWrap>
        <Button text="Registrar" />
      </S.Form>
      <S.Text>
        Já tem uma conta? <Link href="/login">Entrar</Link>
      </S.Text>
    </S.Container>
  );
};

export default RegisterUserForm;
