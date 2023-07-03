import React from 'react'
import { details } from '../constants';
import styles, { layout } from '../style';
import Buttonphone from './ButtonPhone';
import ButtonEmail from './ButtonEmail';
import { sitting } from '../assets';

const ContactDets = ({ title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[10px] ${index !== details.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`flex-1 flex flex-col ml-3 rounded-[14px] w-[364px] h-[100px] ${styles.flexCenter} bg-dark_yellow place-content-start`}>
      <h4 className='font-poppins font-semibold text-darkest_yellow text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-yellow_bg text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

const Contact = () => {
  return (
    <div className='mb-[50px] mt-[50px]'>
    <section id="contact" className={`flex md:flex-row flex-col max-h-[200px] ${styles.paddingY}`}>
    
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-4`}>
        <h2 className={styles.heading2}>Contact Us</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Do not hesitate to reach out to us if you want to get to know more about what we do or have any questions.</p>
      </div>

      <div className={`flex-col max-w-[600px] max-h-[600px] z-[5] justify-content-middle md:mb-50 mr-[100px] items-center`}>
        <Buttonphone styles="m-10 w-[300px] h-[125px]" />
        <ButtonEmail styles="m-10 w-[300px] h-[105px]" />
      </div>

      {/* <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}

      // </div> */}
      {/* <div className={`${layout.sectionImg} flex-col float-left`}>
        {details.map((det, index) => (
          <ContactDets key={det.id} {...det} index={index} />
        ))}
      </div> */}
      
    </section>
    <div className={`max-w-[600px] max-h-[600px]`}>
    <img src={sitting} alt="sit" className='w-[70%] h-[70%]' />
  </div>
  </div>
  )
}

export default Contact