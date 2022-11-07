import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DsCampoTexto, DsCampoTextoProps } from '../src/components/DsCampoTexto'

export default {
  title: 'componentes/DsCampoTexto',
  component: DsCampoTexto,
  argTypes: {
    label: {
        control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof DsCampoTexto>;

const Template: ComponentStory<typeof DsCampoTexto> = (args) => <DsCampoTexto {...args} />;

export const DsCampoTextoComponent = Template.bind({})
DsCampoTextoComponent.args = {
    label: 'Uma label interessante',
} as DsCampoTextoProps