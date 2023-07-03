import React from 'react'

const Button = ( { styles } ) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue font-poppins font-medium text-[18px] text-yellow_bg outline-none rounded-[15px] ${styles}`}>
      Get Started
    </button>
  )
}

export default Button