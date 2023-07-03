import React, { useState } from 'react'
import ShowSum from './components/ShowSum'

function App() {
  const [label, setLabel] = useState('result')

  return (
    <>
      <button onClick={() => setLabel(label + ':')}>Change Label</button>

      <ShowSum label={'result'} n={500} />
    </>
  )
}

export default App
