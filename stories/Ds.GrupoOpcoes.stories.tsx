import React from 'react';
import { DsGrupoOpcoes } from '../src/components/DsGrupoOpcoes';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/DsGrupoOpcoes',
  component: DsGrupoOpcoes

} as ComponentMeta<typeof DsGrupoOpcoes>

const Template: ComponentStory<typeof DsGrupoOpcoes> = (args) => <DsGrupoOpcoes />

export const Padrao = Template.bind({})

Padrao.args = {} 