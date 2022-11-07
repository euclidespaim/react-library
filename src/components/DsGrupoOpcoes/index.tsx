import React, { useState } from 'react';
import styled from 'styled-components';

const SectionEstilizada = styled.section<{ selecionado: boolean }>`
  display: flex;
  flex-direction: column;
  width: 190px;
  height: 88px;
  background: ${props => props.selecionado ? 'linear-gradient(97deg, #002f52 36%, #326589 166%)' : '#fff'};
  border: 1px solid;
  border-color: ${props => props.selecionado ? '#002f52' : '#eb9b00'};
  border-radius: 8px;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  header {
    color: ${props => props.selecionado ? '#fff' : '#eb9b00'};
    font-size: 12px;
    font-weight: 400;
  }

  strong {
    color: ${props => props.selecionado ? '#fff' : '#eb9b00'};
    font-size: 16px;
    font-weight: 700;
  }

  footer {
    color: ${props => props.selecionado ? '#fff' : 'rgba(0, 0, 0, 0.54)'};
    font-size: 12px;
    font-weight: 400;
  }
`

export interface DsGrupoOpcao {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}

export interface DsGrupoOpcoesProps {
  opcoes: DsGrupoOpcao[]
  valorPadrao?: DsGrupoOpcao | null
  onChange?: (opcao: DsGrupoOpcao) => void
}

export const DsGrupoOpcoes = ({ opcoes, onChange, valorPadrao } : DsGrupoOpcoesProps) => {

  const [selecionado, setSelecionado] = useState<DsGrupoOpcao | null>(valorPadrao ?? null);
  
  const aoSelecionar = (opcao: DsGrupoOpcao): void => {
    setSelecionado(opcao);
    if (onChange) {
      onChange(opcao);
    }
  }
  return (
    <>
       {opcoes.map(opcao => 
       <SectionEstilizada 
        onClick={() => aoSelecionar(opcao)} 
        key={opcao.id} 
        selecionado={selecionado?.id === opcao.id}
      >
       <header>
          {opcao.titulo}
       </header>
       <div>
         <strong>{opcao.corpo}0</strong>
       </div>
       <footer>
          {opcao.rodape}
       </footer>
     </SectionEstilizada>  
     )}   
    </>
  );
};

