import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { DsBotao } from '../src/components/DsBotao';

export default {
  title: 'Componentes/DsBotao',
  component: DsBotao

} as ComponentMeta<typeof DsBotao>

const Template: ComponentStory<typeof DsBotao> = () => <DsBotao />

export const Primario = Template.bind({})