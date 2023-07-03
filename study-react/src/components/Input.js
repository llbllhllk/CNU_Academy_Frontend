import React from 'react'

const Input = React.forwardRef((_, ref) => {
  
  return (
    <>
      <input type="text" ref={ref} />
    </>
  )
})

export default Input
