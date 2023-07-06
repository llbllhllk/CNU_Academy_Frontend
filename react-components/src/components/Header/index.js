import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ children, level, strong, underline, color, ...props }) => {
  let Tag = `h${level}`

  const fontStyle = {
    fontWeight: strong ? 'bold' : 'normal',
    textDecoration: underline ? 'underline' : undefined,
    color,
  }

  if (level < 1 || level > 6) {
    console.warn('only level 1 ~ 6')
    Tag = 'h1'
  }

  return <Tag style={{ ...props.style, ...fontStyle }}>{children}</Tag>
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  strong: PropTypes.bool,
  underline: PropTypes.bool,
  color: PropTypes.string,
}

export default Header