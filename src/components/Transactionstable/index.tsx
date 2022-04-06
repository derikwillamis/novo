import React from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styled";

export function Transactionstable() {
  useEffect(() => {
    api.get("transactions").then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Desenvolvimento de websit</td>
            <td className="deposit">R$12000</td>
            <td>Desenvolvimento</td>
            <td>28/03/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$600</td>
            <td>Casa</td>
            <td>28/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
