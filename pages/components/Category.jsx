import React from 'react'
import GalleryCard from './GalleryCard'

// Define the Category component
const Category = () => {
   // Render the component JSX
  return (
     // Create a container element for the component
    <div className='max-w-[1248px] mx-auto mb-6 text-center py-2 '>
    <p className='text-4xl font-bold mb-4'>Catégories</p>
    <div >
      <GalleryCard/>
    </div>
</div>
  )
}

export default Category