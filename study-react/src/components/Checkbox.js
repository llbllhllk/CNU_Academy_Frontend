const Checkbox = ({ label = 'Label', checked = false, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={onChange}
      ></input>
    </>
  )
}

export default Checkbox
