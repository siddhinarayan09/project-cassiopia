import { assets } from '@/assets/assets'
import GradientButton from '@/app/components/gradientbt' 
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from "motion/react"

const TypingText = ({ text, className = ""}) => {
  const [displayText, setDisplayText] = useState('');
  const speed = 100; // ms

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text]);
return <span className={className}>{displayText}</span>;
};



const header = () => {

    const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen w-full 
    body::before {
  background: var(--third-glow);
  border-radius: 50%;
  width: 50vw;
  height: 50vw;
  margin-left: -200px;
  filter:blur(90px);  
  top: calc(50vh - 50vw/2);
  left: calc(50vw );
}

body::after {
  background: var(--secondary-glow);
  border-radius: 50%;
  width: 500px;
  height: 700px;
  filter:blur(90px);
  top: calc(50vh - 50vw/2);
  left: calc(50vw - 50vw/2);
}

    ">
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div 
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
        </motion.div>
        <motion.div 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
        className = 'px-12 py-0.5 rounded-full bg-white/10 flex items-center'>
        <motion.h3 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
        className = 'flex items-end gap-2 mb-1 font-Ovo text-gray-700' >
        <p>A new way to shop with friends and family.</p></motion.h3></motion.div>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-transparent bg-clip-text "
        style={{
    backgroundImage: 'linear-gradient(to right, #6a11cb,rgb(34, 138, 76))',
  }}
>
        Shop together <br/>  from anywhere.
      </h1>
        <p className='max-w-3xl mx-auto font-Ovo text-black text-xl'>
            Experience the future of shopping with friends and family in real-time, <br/>no matter where they are.
        </p>
        <div className = 'flex flex-col sm:flex-row items-center gap-4 mt-4'>

            <motion.a 
            initial= {{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            href='#contact'
            >
            <GradientButton className='px-12 py-3 rounded-full 
            text-white flex items-center gap-2 cursor-pointer transition duration-300 hover:scale-105'
            gradient="linear-gradient(90deg, #6a11cb 0%, #2575fc 40%, #2ec66b 100%)" 
            >
       Create a Room
      </GradientButton></motion.a>

    
            <motion.a
            initial= {{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            > 
            <GradientButton className='px-9 py-3 rounded-full 
            text-white flex items-center gap-2 cursor-pointer transition duration-300 hover:scale-105'
            gradient="linear-gradient(90deg, #2ec66b 0%,  
#b4b239 40%, #df8200 100%)" 
            >
       Join room via code
      </GradientButton>
            </motion.a>

        
        </div>
    </div>
    </div>
  )
}

export default header