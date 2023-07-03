import React from 'react';
import styles from '../style';

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-lightblue p-[2px]`}>
    <div className={`${styles.flexCenter} flex-col bg-stone-100 w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className='text-lightblue'>Get</span>
        </p>
        <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt="arrow" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className='text-lightblue'>Started</span>
      </p>
    </div>
  </div>
)

export default GetStarted