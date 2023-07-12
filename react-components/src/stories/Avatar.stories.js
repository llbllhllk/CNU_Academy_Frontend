import React from 'react'
import Avatar from '../components/Avatar'

export default {
  title: 'Component/Avatar',
  component: Avatar,
  argTypes: {
    shape: { control: 'inline-radio', options: ['circle', 'round', 'square'] },
    size: { control: { type: 'range', min: 40, max: 200 } },
    mode: { control: 'inline-radio', options: ['contain', 'cover', 'fil'] },
  },
}

export const Default = (args) => {
  return <Avatar {...args} src={'https://picsum.photos/200/100'} />
}
