import React from 'react'
import { FcLike } from 'react-icons/fc';
import { FiHeart } from 'react-icons/fi';
import { LuHeart } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { dislike, liked } from '../redux/like/like-reducer';
import { useDispatch, useSelector } from 'react-redux';


const CategoryCard = (item) => {
  console.log(item.category);

  const dispatch = useDispatch()
  const { like } = useSelector(state => state.like)
  return (
    <div className='w-[210px] bg-white rounded-md'>
      <div className='p-1'>
        <Link to={`/category/${item.category}/${item.id}`}>
          <img className='w-[202px] h-[146px] rounded-md' src={item?.img} alt="" />
        </Link>
        <div className='pt-2 px-[10px] pb-3'>
          <h3 className='font-semibold h-[40px] mb-3'>{item?.title?.length > 37 ? `${item?.title?.slice(0, 37)}...` : item?.title}</h3>
          <p className='text-xl font-bold'>{item?.price}</p>
          <p className='text-gray-500'>{item?.location}</p>
          <div className='text-gray-500 flex items-center justify-between'>
            <p className='mt-2 '>{item?.date}</p>
            {like.findIndex(like => like.id == item?.id) == -1 ?
              <FiHeart className='text-xl' onClick={() => dispatch(liked(item))} />
              :
              <FcLike className='text-xl' onClick={() => dispatch(dislike(item))} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard