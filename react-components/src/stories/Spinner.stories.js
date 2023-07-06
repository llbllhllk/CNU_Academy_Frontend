import React from 'react'
import Spinner from '../components/Spinner'

export default {
  title: 'Component/Spinner',
  conmponent: Spinner,
  argTypes: {
    size: { control: { type: 'range', min: 24, max: 60 } },
    color: { control: 'color' },
    loading: { control: 'boolean' },
  },
}

export const Default = (args) => {
  return <Spinner {...args} />
}
