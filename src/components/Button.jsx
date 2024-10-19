import React from 'react'

const Button = ({label}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-[rgb(214,229,94)] rounded-full border-coral-red hover:bg-[rgb(180,200,80)] shadow-lg'>
    {label}
    </button>
  )
}

export default Button