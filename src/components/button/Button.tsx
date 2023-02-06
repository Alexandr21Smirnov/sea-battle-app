import React from 'react'
import './Button.css'

const Button = () => {
  
  return (
    <div className='btn-wrapper'>
      <button className='btn' type='button' onClick={() => window.location.reload()}>Randomize</button>
    </div>
  )
}

export default Button
