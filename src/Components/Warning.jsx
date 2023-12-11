import React from 'react'

const Warning = ({children}) => {
  return (
    <div className=' bg-red-500 p-3 rounded-lg text-white font-bold mb-3'>{children}</div>
  )
}

export default Warning