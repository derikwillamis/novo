import React from "react";
import { Summary } from "../Summary";
import { Transactionstable } from "../Transactionstable";
import { Conteiner } from "./styled";

export function Dashboard() {
  return (
    <Conteiner>
      <Summary />
      <Transactionstable />
    </Conteiner>
  );
}
