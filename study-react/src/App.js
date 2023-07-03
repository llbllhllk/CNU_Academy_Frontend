import React, { useState, useCallback } from 'react'

import useToggle from './hooks/useToggle'
import useHover from './hooks/useHover'
import useKeyPress from './hooks/useKeyPress'

import Checkbox from './components/Checkbox'
import Box from './components/Box'

function App() {
  const [on, toggle] = useToggle()
  const [ref, isHover] = useHover()
  const keyPressed = useKeyPress('a')

  return (
    <>
      <Checkbox checked={on} onChange={toggle} />
      {isHover ? 'hover' : 'mouseout'}
      <Box ref={ref} />
      {keyPressed && 'Pressed'}
    </>
  )
}

export default App
