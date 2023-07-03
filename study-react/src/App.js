import { useRef } from 'react'
import Input from './components/Input'
import AutoCounter from './components/AutoCounter'

function App() {
  const inputRef = useRef()

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>확인</button>
      <AutoCounter />
    </div>
  )
}

export default App
