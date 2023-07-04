import React, { createFactory, useState } from 'react'

import { jsx, css } from '@emotion/react'

import Button from './Button'
import Input from './Input'
import CardForm from './CardForm'
import ErrorText from './ErrorText'
import Title from './Title'

import useForm from '../hooks/useForm'

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000)
  })
}

const LoginForm = ({ onSubmit }) => {
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit,
    validate: ({ name, password }) => {
      const newErrors = {}
      if (!name) newErrors.name = '이름을 입력해주세요.'
      if (!password) newErrors.password = '비밀번호을 입력해주세요.'
      return newErrors
    },
  })

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Button
        disabled={isLoading}
        type="submit"
        css={css`
          display: block;
          margin-top: 6px;
        `}
      >
        Button
      </Button>
    </CardForm>
  )
}

export default LoginForm
