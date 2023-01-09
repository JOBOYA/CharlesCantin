import SliderData from '../../data/SliderData'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import {FaArrowCircleLeft , FaArrowCircleRight} from 'react-icons/fa'

const Slider = () => {
  // Initialize current slide index and length of slides
  const [currnet, setCurrent] = useState(0)
  const length = SliderData.length;

  const nextSlide = () => {
    // If on last slide, go to first slide. Otherwise, go to next slide.
    setCurrent(currnet === length - 1 ? 0 : currnet + 1)
  }
  // Function to go to previous slide
  const prevSlide = () => {
    setCurrent(currnet === 0 ? length - 1 : currnet - 1)
  }
  // If slides is not an array or has no elements, return null
  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className='text-4xl font-bold text-center p-4'>Gallerie</h1>
        
      <div className='relative flex justify-center p-4'>
        {SliderData.map((slide, index) => {
          return (
            <div key={index} className={
              index === currnet
                ? 'opacity-[1] ease-in duration-1000'
                : 'opacity-0'
            }>
                        
              <FaArrowCircleLeft
                onClick={prevSlide}
                size={50} className='absolute top-[50%]
                                                left-[30px] text-white/70 cursor-pointer 
                                                select-home z-[2]' />
              {index === currnet && (
                <Image src={slide.image} alt="/"
                  width='1440' height='600' objectFit='cover' />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                size={50} className='absolute top-[50%]
                                                right-[30px] text-white/70 cursor-pointer 
                                                select-home z-[2]' />
            </div>
          )
        })}
      </div>
                            
    </div>
                        
  )
}


export default Slider