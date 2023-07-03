import React from 'react'

const ButtonEmail = ({ styles }) => {
  return (
    <div className={`py-4 px-6 bg-blue font-poppins font-medium text-[18px] text-yellow_bg outline-none rounded-[15px] feature-card ${styles}`}>
      <h1 className='font-bold text-2xl mb-[5px]'>Send Us an e-mail</h1>
      <a href="mailto:my_email1@gmail.com">my_email1@gmail.com</a>
    </div>
  )
}

export default ButtonEmail