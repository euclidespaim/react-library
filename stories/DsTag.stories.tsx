// stories/AbTag.stories.tsx

import React from "react";
import { DsTag, DsTagProps } from '../src/components/DsTag'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbTag',
    component: DsTag
} as ComponentMeta<typeof DsTag>

const Template: ComponentStory<typeof DsTag> = (args) => <DsTag {...args}/>

export const Primario = Template.bind({})

Primario.args = {
    texto: 'Tag'
} as DsTagProps