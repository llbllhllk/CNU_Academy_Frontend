import React from 'react'
import PropTypes from 'prop-types'

// type: horizontal(가로), vertical(세로) 기준으로 margin 적용
const Spacer = ({ children, type = 'horizontal', size = 8, ...props }) => {
  const spacerStyle = {
    ...props,
    display: type === 'vertical' ? 'block' : 'inline-block',
    verticalAlign: type === 'horizontal' ? 'middle' : undefined,
  }

  return (
    <div {...props} style={spacerStyle}>
      {children}
    </div>
  )
}

return Spacer
