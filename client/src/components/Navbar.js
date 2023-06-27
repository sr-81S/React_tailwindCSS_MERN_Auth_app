import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-8 bg-green-400 text-stone-50'>
        <div className='cursor-pointer'>
            <h1 className='text-lg font-bold'>SAROZ</h1>
        </div>
        <ul className='flex items-center gap-4 font-normal cursor-pointer'>
            <li className='hover:text-stone-200' >Home</li>
            <li className='hover:text-stone-200' >About</li>
            <li className='hover:text-stone-200' >Service</li>
            <li className='hover:text-stone-200' >Product</li>
            <li className='hover:text-stone-200' >Contact</li>
        </ul>
    </div>
  )
}

export default Navbar