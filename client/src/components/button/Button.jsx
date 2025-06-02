import React from 'react'

function Button({data}) {
  return (
    <button className='p-2 m-2 bg-red-500 border-5 border-green-500 rounded-md transition-colors duration-1000 hover:bg-green-500 border-8 border-red-500 rounded-md'>
        {data}
    </button>
  )
}

export default Button