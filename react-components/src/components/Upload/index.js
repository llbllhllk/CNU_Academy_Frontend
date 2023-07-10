import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'

const UploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`

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
  // 파일 업로드를 했을 때 상태를 저장할 수 있도록 한다.
  // 사용자가 input을 눌러 file을 업로드 하면 부모 컴포넌트 혹은 자식 컴포넌트에게 전달해야 한다.
  // 부모 컴포넌트에게는 onChange를 통해 전달할 수 있다.
  // 자식 컴포넌트에게는 children이 jsx를 반환하게 하면 된다.
  const [file, setFile] = useState(value)
  // 요소가 컴포넌트 안으로 들어왔을 경우 true 그렇지 않을 경우 false
  const [dragging, setDragging] = useState(false)

  const inputRef = useRef()

  const handleFileChange = (e) => {
    const files = e.target.files
    const changedFile = files[0]
    setFile(changedFile)
    onChange && onChange(changedFile)
  }

  const handleChooseFile = () => {
    inputRef.current.click()
  }

  // drag event 4가지를 작성한다.

  // 드래그하다가 컴포넌트 내부에 들어왔을 경우
  const handleDragEnter = (e) => {
    if (!droppable) return
    e.preventDefault() // 브라우저 기본 이벤트를 막는다.
    e.stopPropagation() // 부모 혹은 자식 컴포넌트로 이벤트가 전파되는 것을 막는다.
    // 새창 열리는 것을 방지하기 위해
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true)
    }
  }

  // 드래그하다가 컴포넌트 외부에 놓여졌을 경우
  const handleDragLeave = (e) => {
    if (!droppable) return
    e.preventDefault() // 브라우저 기본 이벤트를 막는다.
    e.stopPropagation() // 부모 혹은 자식 컴포넌트로 이벤트가 전파되는 것을 막는다.
    setDragging(false)
  }

  // 사실 필요 없지만 이벤트 전파를 막지 않으면 드래그하고 놓으면 새창이 열린다. 이를 막기 위한 함수
  const handleDragOver = (e) => {
    if (!droppable) return

    e.preventDefault() // 브라우저 기본 이벤트를 막는다.
    e.stopPropagation() // 부모 혹은 자식 컴포넌트로 이벤트가 전파되는 것을 막는다.
  }

  // 최종적으로 드래그하다가 컴포넌트에 내부에 놓았을 경우
  const handleDragDrop = (e) => {
    if (!droppable) return
    e.preventDefault() // 브라우저 기본 이벤트를 막는다.
    e.stopPropagation() // 부모 혹은 자식 컴포넌트로 이벤트가 전파되는 것을 막는다.
    const files = e.dataTransfer.files
    const changedFiled = files[0]
    setFile(changedFiled)
    onChange && onChange(changedFiled)
    setDragging(false)
  }

  return (
    <UploadContainer
      onClick={handleChooseFile}
      onDrop={handleDragDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
    >
      <Input
        type="file"
        ref={inputRef}
        name={name}
        accept={accept}
        onChange={handleFileChange}
      />
      {typeof children === 'function' ? children(file, dragging) : children}
    </UploadContainer>
  )
}

export default Upload
