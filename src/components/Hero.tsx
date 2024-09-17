"use client"
import React from 'react';
import Slider from "react-slick";
import Slides from './Slides';


const Hero = () => {

    var settings = {
        dots: true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        pauseOnHover:false,
    }

const slideData = [
    {
        id:0,
        image:"/images/1.png",
        title:"Trending Item",
        mainTitle:"WOMEN'S LATEST FASHION SALE",
        price:"$20"
    },{
        id:1,
        image:"/images/2.png",
        title:"Trending Accessories",
        mainTitle:"MORERN SUNGLASSES",
        price:"$15",
    },
    {
        id:2,
        image:"/images/3.png",
        title:"Sale Offer",
        mainTitle:"LATEST FASHION SUMMER SALE",
        price:"$30"
    }
]
  return (
    <div>
        <div className='container pt-6 lg-pt-0'>
            <Slider {...settings}>
                {slideData.map((item)=> (
                <Slides
                key={item.id}
                image={item.image}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
                />
                ))}
            </Slider>
            <>
            
            </>
        </div>
    </div>
  
  )
}

export default Hero