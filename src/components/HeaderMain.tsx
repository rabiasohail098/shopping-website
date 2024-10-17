import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const HeaderMain = () => {
  return (
    <div className='border-b border-gray-200 py-4 sm:py-6'>
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            <div className='font-bold text-3xl sm:text-4xl text-center pb-4 sm:pb-0 text-blackish'>
                RSK
                </div>

                <div className='w-full sm:w-[300px] md:w-[70%] relative mb-4 sm:mb-0'>
                    <input className='border-gray-400 border p-2 px-4 rounded-lg w-full' type="text" placeholder='Enter any product name...' />
               <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-700' size={20}/>
                </div>
                <div className='flex gap-4 justify-center sm:justify-start lg:justify-between text-gray-500 text-[24px] lg:text-[30px]'>
                    <BiUser />
                    <div className="relative">
                        <FiHeart />
                        <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'>0</div>
                    </div>

                    <div className="relative">
                        <HiOutlineShoppingBag />
                        <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'>0</div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default HeaderMain