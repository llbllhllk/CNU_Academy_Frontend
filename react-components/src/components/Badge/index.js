import React from 'react'
import styled from '@emotion/styled'

const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`

const Super = styled.sup`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  border-radius: 20px;
  color: #fff;
  background-color: #f44;
  transform: translate(50% -50%);

  &.dot {
    padding: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`

const Badge = ({
  children,
  count,
  maxCount,
  showZero,
  dot = false,
  backgroundColor,
  textColor,
  ...props
}) => {
  const colorStyle = {
    backgroundColor,
    color: textColor,
  }

  let badge = null

  if (count) {
    // count가 있을 경우 maxCount보다 count값이 크면 +형태로 출력하고 그렇지 않을 경우 count값만 출력한다.
    badge = (
      <Super style={colorStyle}>
        {maxCount && count > maxCount ? `${maxCount}+` : count}
      </Super>
    )
  } else {
    // count값이 없고 showZero가 true이면 0을 출력하고 그렇지 않을 경우 출력하지 않는다.
    if (count !== undefined) {
      badge = showZero ? <Super style={colorStyle}>0</Super> : null
    } else if (dot) {
      // dot이 true면 dot모양의 알림을 출력하기 위해 dot클래스 네임을 지정하고 styled component에 스타일링을 정의하여 해당 컴포넌트를 출력한다.
      badge = <Super className="dot" style={colorStyle} />
    }
  }

  return (
    <BadgeContainer {...props}>
      {children}
      {badge}
    </BadgeContainer>
  )
}

export default Badge
