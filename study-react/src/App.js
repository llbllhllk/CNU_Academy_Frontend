import React, { useState } from 'react'
import Box from './components/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <Box />
    </>
  )
}

export default App
