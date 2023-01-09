import React from 'react'



function Hero({heading1, heading2, message}) {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-cover bg-center custom-img'>
    
  
    {/* overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] '/>
      <div className='p-5 text-white z-[2]  mt-[-10rem]'>
        <h2 className='text-5xl font-bold text-blue-900'>{heading1}</h2>
        <h2 className='text-5xl font-bold rotate-90 text-blue-500'>{heading2}</h2>
        <p className='py-5 text-xl italic'>{message}</p>
        <button className='opacity hover:opacity-80 bg-blue-300 text-black py-2 px-5 rounded-full'>Contact</button>
      </div>

        </div>
  

   
  )
 
}



export default Hero
