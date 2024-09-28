import React from 'react'

const Navbar = () => {
  return (
    <div
     className='w-full h-20   flex justify-between items-center px-40'
    >
        <img src="https://www.logoai.com/oss/icons/2022/01/18/e537ec9bebcd577dac80e3a9313054b0.png" className='w-12 h-12 object-cover' alt="" />
        <div>
            <ul className='flex uppercase gap-10  text-white/65'>
                <li className='hover:text-white cursor-pointer hover:scale-105 font-semibold'>about</li>
                <li className='hover:text-white cursor-pointer hover:scale-105 font-semibold'>work</li>
                <li className='hover:text-white cursor-pointer hover:scale-105 font-semibold'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar