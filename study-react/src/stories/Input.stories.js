import React from 'react'
import Input from '../components/Input'

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {
    onChange: { actions: 'onChange' },
  },
}

export const Default = (args) => {
  return <Input {...args} />
}
