import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { useTransaction } from '../../hooks/TransactionContext';

import { Container, RadioBox, TransactionTypeContainer } from './styled';

Modal.setAppElement('#root');
const customStyles = {
  content: {
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
};
interface NewTransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactioModal({
  isOpen,
  onRequestClose,
}: NewTransactionModal) {
  const { createTransaction } = useTransaction();

  const [title, setTitle] = useState('');
  const [amount, setamount] = useState(0);
  const [category, setcategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewtransaction(Evt: FormEvent) {
    Evt.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });
    setTitle('');
    setamount(0);
    setcategory('');
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container onSubmit={handleCreateNewtransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder='Titulo'
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />

        <input
          type='number'
          placeholder='Valor'
          value={amount}
          onChange={(evt) => setamount(Number(evt.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={income} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcome} alt='Saida' />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={(evt) => setcategory(evt.target.value)}
        />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
