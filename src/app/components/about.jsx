import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20 bg-white transparent-40'
    initial= {{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, ease: 'easeOut'}}
            >

        <h1 className='text-center text-5xl font-Ovo mt-10'>
            How coShop works</h1>
        <h4 className='text-center mt-10 text-lg font-Ovo'>
            Experience the joy of shopping together with friends and family, no matter where they are in the world.</h4>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                
                <div className='flex-1'>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6
                    max-w-3xl'>
                        {infoList.map(({icon, iconDark, title, description}, index)=>(
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
             hover:bg-pink-50 hover:-translate-y-1 hover:shadow-[4px_4px_0_#000] duration-500 transition-transform' 
                            key={index}
                            >
                                <Image src={icon} alt={title}/>
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                        
                    </ul>

                    <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index)=>(
                            <li className='flex items-center justify-center
                            w-12 sm:w-14 aspect-square border border-gray-400
                            rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm: w-7'/>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

    </motion.div>

  )
}

export default About