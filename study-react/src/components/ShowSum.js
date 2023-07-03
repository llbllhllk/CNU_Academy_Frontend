import React, { useMemo } from 'react'

const sum = (n) => {
  console.log('Start!')
  let result = 0
  for (let i = 0; i <= n; i++) {
    result += i
  }
  console.log('Finished!')
  return result
}

const ShowSum = ({ label, n }) => {
  const result = useMemo(() => sum(n), [n])

  return (
    <span>
      {label}: {result}
    </span>
  )
}

export default ShowSum
