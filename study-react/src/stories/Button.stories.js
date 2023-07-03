import React from 'react'
import Button from '../components/Button'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    onClick: { actions: 'onClick' },
  },
}

export const Default = (args) => {
  return <Button {...args}>Button</Button>
}
