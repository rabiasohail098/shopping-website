import React from 'react'
import { BsFacebook, BsTwitter , BsInstagram, BsLinkedin , BsYoutube ,BsGithub } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
        <div className='container py-4'>
            <div className='flex justify-between items-center'>
                <div className='hidden lg:flex gap-1'>
                    <div className="header_top_icon_wrapped">
                            <BsFacebook />
                            </div>
                            <div className="header_top_icon_wrapped">
                            <BsTwitter />
                            </div>
                            <div className="header_top_icon_wrapped">
                            <BsInstagram />
                            </div>
                            <div className="header_top_icon_wrapped">
                            <BsLinkedin />
                            </div>
                            <div className="header_top_icon_wrapped">
                            <BsGithub />
                            </div>
                            <div className="header_top_icon_wrapped">
                            <BsYoutube/>
                    </div>
                </div>
                <div className='.text-gray-500 text-[12px]'>
                    <b>FREE SHOPPING</b>  THIS WEEK ORDER OVER - $55
                </div>


                <div className='flex gap-4'>
                    <select className='text-gray-500 text-[12px] w-[70px]' name="currency" id="currency">
                        <option value="USD $">USD $</option>
                        <option value="EUR ">EUR</option>
                        <option value="INR">INR</option>
                    </select>

                    <select className="text-gray-500 text-[12px] w-[80px]" name="language" id="language">
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Urdu">Urdu</option>
                    </select>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default HeaderTop