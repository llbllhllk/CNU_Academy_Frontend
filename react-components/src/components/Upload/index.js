import React, { useRef, useState } from 'react'
import styled from '@emotion/styled'

const Input = styled.input`
  display: none;
`

const Upload = ({
  children,
  droppable,
  name,
  accept,
  value,
  onChange,
  ...props
}) => {
  const [file, setFile] = useState(value)
  const [dragging, setDragging] = useState(false)

  const inputRef = useRef(null)

  const handleFileChange = (e) => {
    const files = e.target.files
    const changedFile = files[0]
    setFile(changedFile)
    onChange && onChange(changedFile)
  }

  const handleChooseFile = () => {
    inputRef.current.click()
  }

  // 드래그 해서 들어왔을 때
  const handleDragEnter = (e) => {
    if (!droppable) return

    e.preventDefault() // 브라우저 기본 이벤트를 막는다.
    e.stopPropagation() // 부모나 자식 컴포넌트로 이벤트가 전파되는 것을 막는다.

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true)
    }
  }

  const handleDragLeave = () => {
    if (!droppable) return

    e.preventDefault() // 브라우저 기본 이벤트를 막는다.
    e.stopPropagation() // 부모나 자식 컴포넌트로 이벤트가 전파되는 것을 막는다.

    setDragging(false)
  }

  const handleDragOver = () => {
    if (!droppable) return

    e.preventDefault() // 브라우저 기본 이벤트를 막는다.
    e.stopPropagation() // 부모나 자식 컴포넌트로 이벤트가 전파되는 것을 막는다.
  }

  const handleFileDrop = (e) => {
    if (!droppable) return

    e.preventDefault() // 브라우저 기본 이벤트를 막는다.
    e.stopPropagation() // 부모나 자식 컴포넌트로 이벤트가 전파되는 것을 막는다.

    const files = e.dataTransfer.files
    const changedFile = files[0]
    setFile(changedFile)
    onChange && onChange(changedFile)
    setDragging(false)
  }

  return (
    <div
      onClick={handleChooseFile}
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}
    >
      <Input
        type="file"
        ref={inputRef}
        name={name}
        accept={accept}
        onChange={handleFileChange}
      />
      {typeof children === 'function' ? children(file) : children}
    </div>
  )
}

export default Upload
