import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
    // state variable to toggle mobile navbar
    const [nav, setnav] = useState(false);
    // state variable to change text color based on scroll position
    const [textColor, settextColor] = useState('white');
       // state variable to change navbar color based on scroll position
    const [Color, setColor] = useState('transparent');
    // function to toggle mobile navbar
    const handleNav = () => {
        setnav(!nav)
    } 
    // change navbar color and text color on scroll
    useEffect(()=>{
        const changeColor = () => {
            if(window.scrollY >= 90){
                setColor('#fff')
                settextColor("#000")
            } else {
                setColor('transparent')
                settextColor("#fff")
            }
        }
        window.addEventListener('scroll',changeColor);
    }, [])
  return (
    <div style={{backgroundColor: `${Color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-3 text-white'>
           <Link href="/">
           <h2 style={{color:`${textColor}`}} className='font-bold text-4xl'>Grip</h2>
           </Link>
           <ul style={{color:`${textColor}`}} className='hidden sm:flex'>
            <li className='p-3 hover:underline'>
                <Link href="/">Accueil</Link>
            </li>
            <li className='p-3 hover:underline'>
                <Link href="/#gallery">Gallerie</Link>
            </li>
            <li className='p-3 hover:underline'>
                <Link href="/work">Tarifs & Prestations</Link>
            </li>
            <li className='p-3 hover:underline'>
                <Link href="/contact">Contact</Link>
            </li>
           </ul>

           {/* mobile button */}
           <div className='block sm:hidden z-10 '>
              {nav 
              ? <AiOutlineClose size={20}  onClick={handleNav} /> 
              : <AiOutlineMenu size={20} style={{color:`${textColor}`}} onClick={handleNav} /> } 
           </div>
           {/* mobile menu */}
            <div className={
            nav 
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
           : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' 
            }>
                <ul>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href="/#gallery">Gallerie</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href="/work">Tarifs & Prestations</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar