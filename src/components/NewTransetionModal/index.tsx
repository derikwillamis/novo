import React from 'react';
import Modal from 'react-modal';
import {Container} from './styled'

Modal.setAppElement('#root')

interface NewTransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModal) {

  return (
    <Modal
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      
      <Container>
      <h2>Cadastrar transação</h2>
      <input

      placeholder='Titulo'
      />

       <input
       type="number"
      placeholder='Valor'
      />

       <input
      placeholder='Categoria'
      />
      <button type="submit">
        Cadastrar
      </button>
      </Container>
    </Modal>
  );
}
