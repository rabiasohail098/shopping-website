import React from 'react'
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
interface propsType {
    img:string;
    title:string;
    desc:string;
    rating:number;
    price:string;
}
const ProductCard:React.FC<propsType> = ({
    img,
    title,
    desc,
    rating,
    price,
}) => {
    const generateRating = (rating:number)=>{
        switch (rating){
            case 1:
                return (
                    <div className="flex gap-2 text-[20px] text-[#ff9529]">
                    <AiFillStar />
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                
                    </div>
                )
                
                case 2:
                    return (
                        <div className="flex gap-1 text-[20px] text-[#ff9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                    
                        </div>
                    )
                       
                case 3:
                    return (
                        <div className="flex gap-1 text-[20px] text-[#ff9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                    
                        </div>
                    )
                    case 4:
                        return (
                            <div className="flex gap-1 text-[20px] text-[#ff9529]">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar/>
                        
                            </div>
                        )
                        case 5:
                            return (
                                <div className="flex gap-1 text-[20px] text-[#ff9529]">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            
                                </div>
                            )
                    default:
                return null;

        }
    };
  return (
    <div id="cards" className='px-4 border-gray-600 rounded-xl max-w-[400px]'>
        <div>
            <Image className="w-[800px] h-[600px]"
            src={img}
            width={200}
            height={300}
            alt={title}
            />
        </div>
        <div className="space-y-2 py-2">
            <h2  id="title" className='text-accent font-medium uppercase'>{title}</h2>
            <p id="desc" className='text-gray-500'>{desc}</p></div>
            <div id="rating">{generateRating(rating)}</div>
            <div id="price" className='text-gray-800 font-bold gap-6'>
                ${price}
                <del className='text-gray-500 font-normal'>   ${parseInt(price) + 50}.00</del>
                </div>

        </div>

  )
}

export default ProductCard