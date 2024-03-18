import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProduct } from '../../service/query/useGetSingleProduct'
import arrow1 from '../../assets/photo/arrow1.svg'
import arrow2 from '../../assets/photo/arrow2.svg'

const ProductDetails = () => {
  const params = useParams()
  console.log(params);

  const id = params.id
  const cateory = params.category ? params.category : 'all'

  const {data} = useGetSingleProduct(id, cateory)
  console.log(data);

  return (
    <div className='bg-secondary-light pt-8 pb-[56px]'>
      <div className='container m-auto'>
        <div className='flex justify-between items-center'>
          <div className='w-[711px] h-[460px] flex items-center justify-center'>
            <img className='w-[711px]' src={data?.img} alt="" />
          </div>
          <div>
            <div className='bg-white w-[375px] px-6 py-4'>
              <h3 className='text-xl font-bold'>Foydalanuvchi</h3>
              <div className='mt-[30px] flex items-start justify-between'>
                <img className='w-10 rounded-full' src={data?.authImg} alt="" />
                <div>
                  <p className='text-lg font-semibold'>{data?.auth}</p>
                  <p className='text'>Ro’yxatdan o’tgan sanasi {data.authDate}</p>
                  <p className='text-gray-500 mt-1 mb-2'>Online</p>
                  <div className='flex items-center'>
                    <p className='font-semibold'>Barcha e’lonlar</p>
                    <img className='pt-1' src={arrow2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white p-4'>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails