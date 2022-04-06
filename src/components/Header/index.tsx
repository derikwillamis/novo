import React from "react";
import Logoimg from "../../assets/logo.svg";
import { Container, Content } from "./styled";

interface Headerprops {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: Headerprops) {
  return (
    <Container>
      <Content>
        <img src={Logoimg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
