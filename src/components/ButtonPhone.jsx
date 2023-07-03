import React from 'react'

const ButtonPhone = ({ styles }) => {
  return (
    <div className={`py-4 px-6 bg-blue font-poppins font-medium text-[18px] text-yellow_bg outline-none feature-card rounded-[15px] ${styles}`}>
      
      <h1 className='font-bold text-2xl mb-[5px]'>Call Us</h1>
      <a href="tel:123-456-789">123-456-789</a>
      <br />
      <a href="tel:987-654-321">987-654-321</a>
    </div>
  )
}

export default ButtonPhone