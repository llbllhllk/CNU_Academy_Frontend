import React, { useState, useCallback, useEffect } from 'react'

const useKeyPress = (targetKey) => {
  const [keyPress, setKeyPress] = useState(false)

  const handleKeyDown = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        setKeyPress(true)
      }
    },
    [targetKey],
  )

  const handleKeyUp = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        setKeyPress(false)
      }
    },
    [targetKey],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return keyPress
}

export default useKeyPress
