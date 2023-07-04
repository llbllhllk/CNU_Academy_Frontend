import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 8px 6px;
  width: 100%;
  display: block;
  height: 32px;
  background-color: black;
  color: #fff;
  border: none;
  outlint: none;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #111;
  }

  &:active {
    background-color: #222;
  }

  &:disabled {
    background-color: #888;
  }
`

export default Button
