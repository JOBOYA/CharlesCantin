import Image from 'next/image'
import React from 'react'
import CardsData from '../../data/CardsData'

// Define the GalleryCard component
const GalleryCard = () => {
  return (
    // Create a container element for the cards
    <div className='relative flex justify-center items-center flex-wrap  '>
      {CardsData.map((item) => {
        return (
        <div key={item.id} className='w-[400px] p-5 bg-white my-2 h-[350px] mx-2 shadow-md hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out'>
           <div className=''>
            <Image src={item.image} alt='/' className='w-full h-full'
           objectFit='cover'
           layout='responsive' 
            />
          </div>
          <div className='flex justify-between items-end' >
            <div className='text-left my-3'>
              <h2 className='font-bold text-2xl'>{item.title}</h2>
              <p className='text-[#555] mt-1'>{item.desc}</p>
            </div>
          </div>
        </div>
        )
        })}
    
    </div>
  )
}

export default GalleryCard
