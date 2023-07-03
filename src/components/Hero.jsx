import React from 'react';
import styles from '../style';
import { robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="about_us" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-4`}>
      <div className='flex flex-row justify-between items-center w-full px-4'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-darkest_yellow ss:leading-[100px] leading-[75px]'>Who are <br className='sm:block hidden' /> {" "} <span className='text-pink text-[170px] '>We</span> <span className='text-darkest_yellow '>?</span> {" "} <br className='sm:block hidden' /></h1>
        <div className='ss:flex hidden md: mr-4 mr-0'>
          {/* <GetStarted /> */}
        </div>
      </div>
      <p className={`${styles.paragraph} max-w-[1200px] mt-5`}>Campus Playmakers is an organisation which aims to connect the cultures upon school campuses around the world through sport. It is designed to facilitate support from campuses in the United Kingdom to the countries overseas. We aim to offer students the opportunity to have a tangible impact on countries, represented by their student-peers, which may not have access to the same sporting facilities. At the same time, allowing culture to be celebrated and appreciated in a more meaningful way on campuses.</p>
      <p className={`${styles.paragraph} max-w-[1000px] mt-5`}>Our enterprise is itself a charity, but it is run on campuses through university societies. This allows for the enterprise to maintain as a student endeavour and ensure that it is the students themselves making the difference.</p>

    </div>
    <div className={`max-w-[600px] max-h-[600px] justify-content-top md:mb-50 mb-50 mr-10 static`}>
      <img src={robot} alt="skater" className='w-[100%] h-[100%] relative z-[5] mr-0 object-right-top' />
    </div>
  </section>
)

export default Hero 