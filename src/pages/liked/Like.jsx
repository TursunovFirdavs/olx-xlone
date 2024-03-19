import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../utils/Card'

const Like = () => {

  const { like } = useSelector(state => state.like)

  return (
    <div className='bg-secondary-light pt-8 pb-[56px]'>
      {like.length ?
        <div className='container m-auto '>
          <h2 className='text-3xl font-bold pb-8'>Saralanganlar</h2>
          <div className='flex gap-[15px] flex-wrap'>
            {
              like?.map(item => <Card {...item} />)
            }
          </div>
        </div>
        :
        <div className='flex flex-col h-[420px] items-center justify-center'>
          <img src="https://olcha.uz/_nuxt/empty-img.3a4aef3b.png" alt="" />
          <h3 className='mb-6 font-semibold text-3xl mt-5'>Tanlangan mahsulotlar yo'q</h3>
        </div>
      }
    </div>
  )
}

export default Like