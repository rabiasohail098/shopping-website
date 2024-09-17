import React from 'react'
import ProductCard from './ProductCard'
const productData = [
  {
    img:"/images/pic1.jpg",
    title:"Black-Top",
    desc:"Pink Queen Women's Elegant Long Sleeve Satin Dress Mock Neck Elastic Waist Cocktail Party Wedding Guest Midi Dresses",
    rating:3,
    price:"45.99    ",
 },{
  img:"/images/banner2.png",
  title:"Glasses",
  desc:"Oakley Women's Oo9232 Drop-in Cat Eye Sunglasses Oakley Women's Oo9232 Drop-in Cat Eye Sunglasses Oakley Women's.",
  rating:4,
  price:"87.50    ",
 },{
  img:"/images/OIF (6).jpeg",
  title:"MEROKEETY",
  desc:"MEROKEETY Women's 2024 Summer Square Neck Puff Sleeve Boho Midi Dress Swiss Dot Ruffle Flowy Tie Back Dress",
  rating:4,
  price:"49.99    ",
 } ,{
  img:"/images/4.png",
  title:"Print Gown",
  desc:"Print Gown style 3 PC's Oakley Women's Oo9232 Drop-in Cat Eye Sunglasses Print Gown style 3 PC's print.",
  rating:5,
  price:"19.99    ",
 } ,{
  img:"/images/5.png",
  title:"Butterfly Fashion Princess",
  desc:"Children's Clothing 0-3 Year Girl Beautiful Little Butterfly Fashion Princess Dress+Shawl+Headband Birthday Party Fluffy Dress",
  rating:5,
  price:"23.99    ",
 } ,{
  img:"/images/6.png",
  title:"Baby Girl Dress",
  desc:"Dress For Kids 3-24 Months Korean Style Fashion Short Sleeve Cute Floral Princess Formal Dresses Ootd For Newborn Baby Girl",
  rating:5,
  price:"19.99    ",
 } ,{
  img:"/images/7.png",
  title:"Baby Dress",
  desc:"Beautiful Crochet baby dress(all size available Crochet baby dress(all size available Crochet baby dress(available)",
  rating:5,
  price:"09.99    ",
 } ,{
  img:"/images/8.png",
  title:"Sport's shoes",
  desc:"Children Sport Shoes Boys Fashion Mesh Breathable Casual Sneakers Lightweight Mesh Breathable Running Shoes Comfort",
  rating:4,
  price:"19.99    ",
 } ,{
  img:"/images/9.png",
  title:"High Heels 2024",
  desc:"2024 Summer New Fairy Style Fashion Stiletto High Heels Sandals Outdoor  Stiletto High Heels Sandals Slippers",
  rating:4,
  price:"29.99    ",
 } ,{
  img:"/images/10.png",
  title:"stylo",
  desc:"Elegant Women High Heels 2024 Fashion Pointed Toe Ladies Mid Heel Slipper Pumps Women Mules Plus Size Purple Women Shoes",
  rating:4,
  price:"20.99    ",
 } ,{
  img:"/images/11.png",
  title:"Polo Men'st-shirt",
  desc:"Polo Men's Short Seleevs Branded T-Shirts Summer New Plus Size Male T Shirt for Men's with Top Quality for Eid Collection",
  rating:4,
  price:"15.99    ",
 } ,{
  img:"/images/12.png",
  title:" Olive Green",
  desc:"The Vintage Clothing Olive Green Premium 100% Boski Linen Shirts - Stay Stylish And Elegant With Our Dress",
  rating:4,
  price:"8.99    ",
 } ,{
  img:"/images/13.png",
  title:"Blue Jeans for Man",
  desc:"Stretchable Jeans available in all colours and sizes / Formal and Casual Wear Pants branded stock /best quality/",
  rating:4,
  price:"04.00    ",
 } ,{
  img:"/images/14.png",
  title:"Man's Shirt",
  desc:"Navy Blue Double Pocket Basic Olive Green Polo T-Shirts for Men - Short Sleeve Collar T-Shirts - High-Quality Plain Tees",
  rating:4,
  price:"06.99    ",
 } 
  ]

const NewProducts = () => {
  return (
    <div>
      <div className='container pt-16'>
        <h2 id="product" className='font-medium text-exl pb-4'>New Products:</h2>

        <div className="grid grid-col-1 place-items-center sm-place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
      {productData.map((item,index)=>(
        <ProductCard 
        key={index}
        img={item.img}
        title={item.title}
        desc={item.desc}
        rating={item.rating}
        price={item.price}
        />
        ))}

        </div>
      </div>
    </div>
  )
}

export default NewProducts