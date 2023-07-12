import React from 'react'
import styled from '@emotion/styled'

const AvatarGroup = ({children, shape = 'circle', size = 70, ...props}) => {
  const avatars = React.Children.toArray(children)
  .filter(React.isValidElement(element)) {
    return true
  }

}

export default