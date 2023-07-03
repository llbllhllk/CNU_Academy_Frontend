import React from 'react'
import styled from '@emotion/styled'

import Input from './Input'

const CardForm = styled.form`
  padding: 16px;
  width: 400px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`

const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit && onSubmit()
  }

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <div>
        <span>Name:</span>
        <Input type="text" name="name" />
      </div>
      <div>
        <span>Password:</span>
        <Input type="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </CardForm>
  )
}

export default LoginForm
