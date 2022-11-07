import React from 'react';
import { DsGrupoOpcoes, DsGrupoOpcoesProps } from '../src/components/DsGrupoOpcoes';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/DsGrupoOpcoes',
  component: DsGrupoOpcoes

} as ComponentMeta<typeof DsGrupoOpcoes>

const Template: ComponentStory<typeof DsGrupoOpcoes> = (args) => <DsGrupoOpcoes {... args} />

export const Padrao = Template.bind({})

Padrao.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
    },
    {
      id: 3,
      titulo: 'Impresso + E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
    }
  ]
} as DsGrupoOpcoesProps