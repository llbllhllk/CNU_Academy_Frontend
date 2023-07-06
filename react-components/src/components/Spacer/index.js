import React from 'react'
import PropTypes from 'prop-types'

// type: horizontal(가로), vertical(세로) 기준으로 margin 적용
const Spacer = ({ children, type = 'horizontal', size = 8, ...props }) => {
  const spacerStyle = {
    ...props,
    display: type === 'vertical' ? 'block' : 'inline-block',
    verticalAlign: type === 'horizontal' ? 'middle' : undefined,
  }

  const nodes = React.Children.toArray(children)
    .filter((element) => React.isValidElement(element))
    .map((element, index, elements) => {
      return React.cloneElement(element, {
        ...element.props,
        style: {
          ...element.props.style,
          marginRight:
            type === 'horizontal' && index !== elements.length - 1
              ? size
              : undefined,
          marginBottom:
            type === 'vertical' && index !== elements.length - 1
              ? size
              : undefined,
        },
      })
    })

  return (
    <div {...props} style={spacerStyle}>
      {nodes}
    </div>
  )
}

export default Spacer
