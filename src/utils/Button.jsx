import React from 'react'

const Button = ({text, bg, radius, padding, font}) => {
  return (
    <button className={`${bg == 'dark' && 'bg-dark-color text-white'} ${radius == 16 ? 'rounded-xl' : 'rounded-md'}  font-${font}`} style={{padding: padding}}>
        {text}
    </button>
  )
}

export default Button