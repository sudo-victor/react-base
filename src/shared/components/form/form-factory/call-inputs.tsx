import React, { useEffect } from 'react'
import ComponentsList from './components-list'

const Callinputs = ({
  component,
  value,
  setData,
  ...rest
}: any): JSX.Element | null => {
  useEffect(() => {
    (async () => {
      if (setData) {
        setData(rest.values)
      }
    })()
  }, [rest, setData])

  if (component && typeof component === 'object') return component

  const Component = (ComponentsList as any)[component]

  if (!Component) return null

  return (
    <Component {...rest} value={value || ''} />
  )
}

export default Callinputs
