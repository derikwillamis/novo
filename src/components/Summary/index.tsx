import React from "react";
import incomeimg from "../../assets/income.svg";
import outcomeimg from "../../assets/outcome.svg";
import totalcomeimg from "../../assets/total.svg";

import { Container } from "./styled";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={incomeimg} alt="Emtrada" />
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Entrada</p>
          <img src={outcomeimg} alt="Saida" />
        </header>
        <strong>-R$500</strong>
      </div>
      <div>
        <header>
          <p>Entrada</p>
          <img src={totalcomeimg} alt="Total" />
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  );
}
