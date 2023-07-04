import React, { useState, useEffect, useCallback } from 'react'

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { value, name } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    const newErrors = validate(values)
    if (Object.keys(newErrors).length === 0) {
      await onSubmit()
    }
    setErrors(newErrors)
    setIsLoading(false)
  }

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  }
}

export default useForm
