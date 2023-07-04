import React from 'react'
import Title from '../components/Title'

export default {
  title: 'Component/Title',
  component: Title,
}

export const Default = (args) => {
  return <Title {...args} />
}
