import React from 'react'
import { loadState } from '../../config/storage'
import { useGetUser } from '../../service/query/useGetUser'
import galichka from '../../assets/photo/galichka.svg'
import telegram from '../../assets/photo/Telegram.svg'
import pinterest from '../../assets/photo/Pinterest.svg'
import facebook from '../../assets/photo/Facebook.svg'
import icon from '../../assets/photo/icon1.svg'
import Button from '../../utils/Button'
import { MdSettings } from "react-icons/md";
import { useGetAllProducts } from '../../service/query/useGetAllProducts'
import Card from '../../utils/Card'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'


const Profile = () => {
  const navigate = useNavigate()
  const token = Cookies.get('to1ken')
  token == undefined && navigate('/login')
  const isUser = loadState('user')
  const { data } = useGetUser(isUser.id)
  const { data: allProduct } = useGetAllProducts()
  const products = allProduct?.filter(item => item.auth == data?.username)
  console.log(products);

  return (
    <div className='bg-secondary-light py-10'>
      <div className='container m-auto'>
        <div className='bg-white p-6 rounded-md flex items-center justify-between'>
          <div>

            <div className='flex items-center gap-6'>
              <img className='w-[80px] h-[80px] rounded-full' src={data?.image} alt="" />
              <div>
                <div className='flex items-center gap-2'>
                  <h2 className='text-2xl font-bold'>{data?.username}</h2>
                  <img className='pt-1' src={galichka} alt="" />
                </div>
                <p className='my-1'>9:13 da online  edi</p>
                <p>Ro'yxatdan o'tgan sana {data?.date}</p>
              </div>
            </div>

            <div className='flex gap-6 px-3 pt-4'>
              <img src={facebook} alt="" />
              <img src={pinterest} alt="" />
              <img src={icon} alt="" />
              <img src={telegram} alt="" />
            </div>
          </div>

          <div className='flex gap-4'>
            <Button text={'Fikr bildirish'} bg={'dark'} padding={'8px 24px'} />
            <Button onclick={() => navigate(`/profile-setting/${data?.id}`)} text={`Sozlamalar`}  padding={'8px 28px'} font={'semibold'}/>
          </div>

        </div>
        {products?.length > 0 ? (
          <>
          <h2 className='text-2xl font-bold pb-8 mt-10'>{products?.length} ta e’lon topildi</h2>
          <div className='flex gap-[15px] flex-wrap'>
            {products?.map(item => <Card {...item} />)}
          </div>
          </>
        ) : (
          <p className='text-2xl font-bold mt-10'>Hech qanday e'lon topilmadi</p>
        )}
      </div>
    </div>
  )
}

export default Profile