import React from 'react';
import styled from 'styled-components';

export interface DsBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<DsBotaoProps>`
  background-color: #eb9b00;
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #bb7900;
    border: 2px solid #bb7900;
  }

`

export const DsBotao = ({texto, onClick, tipo= 'primario'} : DsBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  )
}