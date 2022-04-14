import React from 'react';
import incomeimg from '../../assets/income.svg';
import outcomeimg from '../../assets/outcome.svg';
import totalcomeimg from '../../assets/total.svg';
import { useTransaction } from '../../hooks/TransactionContext';

import { Container } from './styled';

export function Summary() {
  const { transactions } = useTransaction();
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={incomeimg} alt='Emtrada' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saida</p>
          <img src={outcomeimg} alt='Saida' />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className='highligh-background'>
        <header>
          <p>Total</p>
          <img src={totalcomeimg} alt='Total' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
