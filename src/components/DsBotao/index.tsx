import React from 'react';
import styled, { css } from 'styled-components';

export interface DsBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<DsBotaoProps>`
  background-color: ${(props: DsBotaoProps) => props.tipo === 'primario' ? '#eb9b00' : '#fff'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: DsBotaoProps) => props.tipo === 'primario' ? '#fff' : '#eb9b00'};
  font-size: 20px;
  cursor: pointer;
  ${(props: DsBotaoProps) => props.tipo === 'primario' 
    ? css`
      &:hover {
        background-color: #b87900;
        border: 2px solid #b87900;
      }` 
    : css`
      &:hover {
        background-color: #fff;
        border: 2px solid #b87900;
        color: #b87900;
      }`
  };
  

`

export const DsBotao = ({texto, onClick, tipo= 'primario'} : DsBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  )
}