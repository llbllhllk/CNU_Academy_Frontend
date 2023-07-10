import React from 'react'
import Image from '../components/Image'
import Badge from '../components/Badge'

export default {
  title: 'Component/Badge',
  component: Badge,
  argTypes: {
    count: { control: 'number' },
    maxCount: { control: 'number' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    showZero: { control: 'boolean' },
  },
}

export const Default = (args) => {
  return (
    <Badge {...args}>
      <Image
        src="https://picsum.photos/60"
        width={60}
        styled={{ borderRadius: 9 }}
      />
    </Badge>
  )
}

export const Dot = (args) => {
  return (
    <Badge dot {...args}>
      <Image
        src="https://picsum.photos/60"
        width={40}
      />
    </Badge>
  )
}
