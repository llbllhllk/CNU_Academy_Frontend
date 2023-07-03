import React from 'react'

const Checkbox = React.memo(({ label, on, onChange }) => {
  console.log(label, on)
  
  return (
    <>
      <label>{label}</label>
      <input type="checkbox" defaultChecked={on} onChange={onChange} />
    </>
  )
})

export default Checkbox
