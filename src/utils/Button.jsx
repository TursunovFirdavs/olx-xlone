import React from 'react'

const Button = ({text, bg, radius, padding, font, width, onclick}) => {
  return (
    <button onClick={onclick} className={`${bg == 'dark' && 'bg-dark-color text-white' || bg == 'gray' && 'bg-secondary-light border-none font-semibold'} border-black border ${radius == 16 ? 'rounded-xl' : 'rounded-md'}  font-${font} border-dark-color w-[${width}]`} style={{padding: padding}}>
        {text}
    </button>
  )
}

export default Button