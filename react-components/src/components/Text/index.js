import './Text.css'
import PropTypes from 'prop-types'

const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  delete: del,
  color,
  mark,
  code,
  ...props
}) => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span'

  const fontStyle = {
    fontSize: typeof size === 'number' ? size : undefined,
    fontWeight: strong ? 'bold' : undefined,
    textDecoration: underline ? 'underline' : undefined,
    color,
  }
 
  if (del) {
    children = <del>{children}</del>
  }
  if (mark) {
    children = <mark>{children}</mark>
  }
  if (code) {
    children = <code>{children}</code>
  }

  return (
    <Tag
      className={typeof size === 'string' ? `Text--size-${size}` : undefined}
      style={{ ...props.style, ...fontStyle }}
    >
      {children}
    </Tag>
  )
}

Text.propTypes = {
	children: PropTypes.node.isRequired,
	block: PropTypes.bool,
	paragraph: PropTypes.bool,
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	strong: PropTypes.bool,
	underline: PropTypes.bool,
	delete: PropTypes.bool,
	color: PropTypes.string,
	mark: PropTypes.bool,
	code: PropTypes.bool,
}

export default Text