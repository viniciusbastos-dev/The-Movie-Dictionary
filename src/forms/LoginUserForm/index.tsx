import React from "react";
import * as S from "./styles";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";

const LoginUserForm = () => {
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
          <Input placeholder="Senha" type="password" />
        </S.InputWrap>
        <Button text="Entrar" />
      </S.Form>
      <S.Text>
        Ainda não tem uma conta? <Link href="/cadastro">Cadastre-se</Link>
      </S.Text>
    </S.Container>
  );
};

export default LoginUserForm;
