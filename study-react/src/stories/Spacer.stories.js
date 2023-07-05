import React from 'react'
import Spacer from '../components/Spacer'

export default {
  title: 'Components/Spacer',
  component: Spacer,
  argTypes: {
    type: { control: string },
    size: { control: { type: 'range', min: 8, max: 64 } },
  },
}

export const Default = (args) => {
  return <Spacer {...args}></Spacer>
}
