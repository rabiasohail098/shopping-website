import React from 'react';
import Image from 'next/image';
interface propsType{
    image:string;
    title:string;
    mainTitle:string;
    price:string
}

const Slides:React.FC<propsType> = ({image,title,mainTitle,price}) => {
  return (
    <div className='outline-none border-none relative'>
        <div className="absolute left-[15px] sm:left-[30px] md:left-[70px] max-w-[200px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
            <h3 className='text-accent text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px]'>{title}</h3>
            <h2 className='text-blackish text-[22px] sm:text-[26px] md:text-[30px] lg-text-[40px] font-bold leading[1.2]'>{mainTitle}</h2>


            <h3 className='text-[24px] sm:text-[28px] md:text-[34px] text-gray-500'>
                starting at{" "}
                <b className='text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px]'>{price}</b>
                .00
            </h3>
            <div className='bg-accent text-white text-[20px] sm:text-[24px] md:text-[28px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish'>
              Shop Now
            </div>
        </div>
    <Image className="w-full h-[200px] sm:h-[300px] md:h-auto rounded-xl object-cover object-right sm:object-center md:object-left-bottom"    
     src={image}
     alt="banner"
     width={2000}
     height={2000}
/>
        

        </div>
  )
}

export default Slides;