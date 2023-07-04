import React from 'react'

import { jsx, css } from '@emotion/react'

import Button from './Button'
import Input from './Input'
import CardForm from './CardForm'
import ErrorText from './ErrorText'
import Title from './Title'

import useForm from '../hooks/useForm'

const SignUpForm = ({ onSubmit }) => {
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit,
    validate: ({ name, password, passwordConfirm }) => {
      const newErrors = {}
      if (!name) newErrors.name = '이름을 입력해주세요.'
      if (!password) newErrors.password = '비밀번호을 입력해주세요.'
      if (password !== passwordConfirm)
        newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.'
      return newErrors
    },
  })

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Sign Up</Title>
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
      <Input
        type="password"
        name="passwordConfirm"
        placeholder="Password Confirm"
        onChange={handleChange}
      />
      {errors.password && <ErrorText>{errors.passwordConfirm}</ErrorText>}
      <Button
        disabled={isLoading}
        type="submit"
        css={css`
          display: block;
          margin-top: 6px;
        `}
      >
        SignUp
      </Button>
    </CardForm>
  )
}

export default SignUpForm
