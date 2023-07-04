import React from 'react'
import Image from '../components/Image'

export default {
  title: 'Component/Image',
  component: Image,
  argTypes: {
    lazy: {
      control: { type: 'boolean' },
    },
    block: {
      control: { type: 'boolean' },
    },
    src: {
      type: { name: 'string', require: true },
      control: { type: 'text' },
    },
    placeholder: {
      type: { name: 'string' },
      control: { type: 'text' },
    },
    threshold: {
      type: { name: 'number' },
      control: { type: 'number' },
    },
    width: {
      control: { type: 'range', min: 200, max: 600 },
    },
    height: {
      control: { type: 'range', min: 200, max: 600 },
    },
    alt: {
      control: 'string',
    },
    mode: {
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
  },
}

export const Default = (args) => {
  return <Image {...args} />
}

export const Lazy = (args) => {
  return (
    <div>
      {Array.from(
        new Array(20, (_, k) => k).map((i) => (
          <Image {...args} lazy block src={`${args.src}?${i}`} key={i} />
        )),
      )}
    </div>
  )
}
