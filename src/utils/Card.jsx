import React from 'react'
import { LuHeart } from "react-icons/lu";


const Card = (item) => {
  return (
    <div className='w-[210px]'>
        <div className='p-1'>
            <img className='w-[202px] h-[146px]' src={item?.img} alt="" />
            <div className='pt-2 px-[10px] pb-3'>
                <h3 className='font-semibold h-[40px] mb-3'>{item?.title?.length > 37 ? `${item?.title?.slice(0, 37)}...` : item?.title}</h3>
                <p className='text-xl font-bold'>{item?.price}</p>
                <p className='text-gray-500'>{item?.location}</p>
                <div className='text-gray-500 flex items-center justify-between'>
                    <p className='mt-2 mb-3'>{item?.date}</p>
                    <LuHeart className='text-lg' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card