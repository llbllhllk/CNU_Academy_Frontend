import { useState, useCallback, useRef, useEffect } from 'react'

const useHover = () => {
  const [state, setState] = useState(false)
  const ref = useRef(null)

  const handleMouseOver = useCallback(() => setState(true), [])

  const handleMouseOut = useCallback(() => setState(false), [])

  useEffect(() => {
    const elem = ref.current

    if (elem) {
      // depth update
      elem.addEventListener('mouseover', handleMouseOver)
      elem.addEventListener('mouseout', handleMouseOut)

      return () => {
        // Unmount
        elem.removeEventListener('mouseover', handleMouseOver)
        elem.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [ref, handleMouseOut, handleMouseOver])

  return [ref, state]
}

export default useHover
