import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { DsBotao, DsBotaoProps } from '../src/components/DsBotao';

export default {
  title: 'Componentes/DsBotao',
  component: DsBotao

} as ComponentMeta<typeof DsBotao>

const Template: ComponentStory<typeof DsBotao> = (args) => <DsBotao {...args}/>

export const Primario = Template.bind({})

Primario.args = {
  texto: 'Botão Primário',
  tipo: 'primario'
} as DsBotaoProps

export const Secundario = Template.bind({})

Secundario.args = {
  texto: 'Botão Secundário',
  tipo: 'primario'
} as DsBotaoProps