import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

// 삼항 연산자로 작성하면 가시성이 떨어지기 때문에 object로 따로 정의한다.
const ShapeToCssValue = {
  circle: '50%',
  rount: '4px',
  square: '0px',
}

import ImageComponent from '../Image'

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  overflow: hidden;
  background-color: #fff;

  /* 이미지가 로드 되면 opacity가 0 -> 1로 변하는 것을 transition한다. */
  > img {
    transition: opacity 0.2s ease-out;
  }
`

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = 'circle', // round, square
  placeholder,
  alt,
  mode = 'dover',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)

  // image가 load가 완료되면 fasle => true로 상태 변화
  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => setLoaded(true)
  }, [src])

  return (
    <AvatarWrapper shape={shape} {...props}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  )
}

export default Avatar
