import { assets } from '@/assets/assets'
import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>
            What I offer</h4>
        <h2 className='text-center text-5xl font-Ovo'>
            My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am a frontend developer from California, USA with 4 years of experience 
                in multiple companies like Microsoft, Tesla and Apple.
            </p>

            <div className='grid lg:grid-cols-4 sm:grid-cols-4 gap-6 my-10'>
                {serviceData.map(({icon, title, description, link}, index)=>(
                    <div key={index} 
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] duration-500 transition-transform cursor-pointer
                    hover:bg-pink-50 hover:-translate-y-1 duration-500'
                    >
                        <Image src={icon} alt="" className='w-10' />
                        <h3 className='text-lg my-4 text-graay-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                        </a>

                    </div>
                ))}
            </div>

    </div>
  )
}

export default services