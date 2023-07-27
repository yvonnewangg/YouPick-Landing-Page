import React from 'react';
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import applogo from '../assets/YouPickApp.png'

import fakevid from '../assets/fakevid.mp4';
import FormsComponent from './FormsComponent';

const videoStyle = {
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  paddingRight: '40px',
};

const bannerTextStyle = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  zIndex: 1,
};

const Hero = () => {
  return (
    <section id="home" className="relative flex md:flex-row flex-col">
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            idk, <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>YouPick</span> {" "}
          </h1>
          {/* <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div> */}
        </div>
        {/* <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          Payment Method.
        </h1> */}
        
        <img src={applogo} alt='applogo' className='w-[200px] h-[190px] mt-6'/>
        {/* <p className={`${styles.paragraph} max-w-[470px] mt-10`} style={largerTextStyle}>
        Interested?
        </p> */}
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>





      {/* Promo Vid */}
      <div className="md:my-0 my-10 relative" style={{ overflow: 'hidden' }}>
        {/* Video takes up full screen */}
        <video autoPlay loop muted style={videoStyle}>
          <source src={fakevid} type="video/mp4" />
        </video>

        {/* "You Pick" text
        <div style={bannerTextStyle}>
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="blc">You Pick</span>
          </h1>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
