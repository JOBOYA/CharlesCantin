// Import the CameraData array from the './CameraData' module
import Image from 'next/image'
import CameraData from '../../data/CameraData'
import React from 'react'


// Define the Camera component
const Camera = () => {
    // Render the component JSX
  return (
    <div>
        <h2 className='font-bold text-3xl py-10 text-center'>Le matériel</h2>
        <div className='flex flex-wrap w-full items-center justify-center'>
              {CameraData.map((item) => {
                // Render an Image component for each element in the array
                return(
                    <div key={item.id}>
                        <div className='m-2' >
                            {item.id === 6
                                ? <Image src={item.image} alt='/' width='614' height='300' style={{ objectFit: 'cover' }} />
                                : <Image src={item.image} alt='/' width='300' height='300' style={{ objectFit: 'cover' }} />}
                            
                        </div>
                        {/* <div className='m-2  block sm:hidden ss:hidden' id={item.id}>
                        <Image src={item.image} alt='/' width='200' height='170' objectFit='cover' />   
                        </div> */}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Camera
