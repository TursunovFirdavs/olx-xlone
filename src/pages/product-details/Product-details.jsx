import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSingleProduct } from '../../service/query/useGetSingleProduct'
import arrow2 from '../../assets/photo/arrow2.svg'
import location from '../../assets/photo/location.svg'
import map from '../../assets/photo/map.svg'
import reklama from '../../assets/photo/reklama.png'
import tel from '../../assets/photo/tel.svg'
import file from '../../assets/photo/file.svg'
import Button from '../../utils/Button'
import { useGetCategory } from '../../service/query/useGetCategories'
import Card from '../../utils/Card'
import CategoryCard from '../../components/Category-card'
import { FiHeart } from 'react-icons/fi'
import { FcLike } from 'react-icons/fc'
import { dislike, liked } from '../../redux/like/like-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { loadState } from '../../config/storage'
import { MdDelete } from "react-icons/md";
import { deleteProduct } from '../../service/mutation/deleteProduct'
import { useGetAllProducts } from '../../service/query/useGetAllProducts'



const ProductDetails = () => {
  const params = useParams()
  console.log(params);
  const navigate = useNavigate()

  const id = params.id
  const cateory = params.category ? params.category : 'all'

  const {data} = useGetSingleProduct(id, cateory)
  const {data: productType} = useGetCategory(data?.category)
  const {data: allProduct} = useGetAllProducts()
  // console.log(productType);
  console.log(allProduct);

  const authProducts = allProduct?.data?.filter(item => item.auth == data?.auth)
  console.log(authProducts);

  const dispatch = useDispatch()
  const { like } = useSelector(state => state.like)

  const isAuth = data?.auth == loadState('user')?.username
  console.log(isAuth);
  const { mutate } = deleteProduct(cateory)

  const handleDelete = () => {
    mutate(id, {
      onSuccess: res => {
      console.log(res);  
      navigate('/')
      },
    })
  }

  return (
    <div className='bg-secondary-light pt-8 pb-[56px]'>
      <div className='container m-auto'>
        <div className='flex justify-between items-center'>
          <div className='w-[711px] h-[460px] rounded-lg overflow-hidden flex items-center justify-center bg-white'>
            <img className='w-[711px] h-full object-cover' src={data?.img} alt="" />
          </div>
          <div className='flex flex-col gap-4'>
            <div className='bg-white w-[375px] px-5 py-4 rounded-md'>
              <h3 className='text-xl font-bold'>Foydalanuvchi</h3>
              <div className='mt-[30px] flex items-start justify-between'>
                <img className='w-10 rounded-full' src={data?.authImg} alt="" />
                <div>
                  <p className='text-lg font-semibold'>{data?.auth}</p>
                  <p className='text'>Ro’yxatdan o’tgan sanasi {data?.authDate}</p>
                  <p className='text-gray-500 mt-1 mb-2'>Online</p>
                  <div className='flex items-center'>
                    <p className='font-semibold'>Barcha e’lonlar</p>
                    <img className='pt-1' src={arrow2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white w-[375px] px-5 py-4 rounded-md'>
              <div className='flex gap-6'>
                <img src={location} alt="" />
                <div>
                  <h3 className='text-lg font-semibold'>{data?.location}</h3>
                  <p className='text-sm mb-1'>O'zbekiston {data?.location}</p>
                  <p>Sizdan 9 km uzoqlikda</p>
                </div>
              </div>
              <img className='mt-3' src={map} alt="" />
            </div>
          </div>
        </div>

        <div className='flex justify-between mt-4'>
          <div className='w-[711px]'>
            <div className='bg-white px-8 py-6 rounded-md'>
              <div className='flex justify-between'>
                <p>Joylashtirildi {data?.date}</p>
                {like.findIndex(item => item.title == data?.title) == -1 ?
                <FiHeart className='text-xl' onClick={() => dispatch(liked(data))} />
                :
                <FcLike className='text-xl' onClick={() => dispatch(dislike(data))} />
            }
              </div>
              <h2 className='text-3xl w-[500px] my-4 font-semibold'>{data?.title}</h2>
              <p className='text-2xl font-bold text-dark-danger'>{data?.price}</p>
              <p className='text-xl mb-2 mt-5 font-semibold'>Tavsifi:</p>
              <p className='w-[600px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quae earum dolor eligendi ullam, iure deserunt fugit cumque quod voluptatibus harum quibusdam dicta eaque inventore quisquam, provident mollitia? Corrupti, voluptatibus.</p>
              <div className='flex pt-5 border-t-2 border-black mt-[70px] justify-between'>
                <p>ID: 41240834</p>
                <p>Ko‘rishlar: 137</p>
                <div onClick={handleDelete} className='text-dark-danger'>
                  {isAuth ? 
                    <div className='flex items-center gap-1 cursor-pointer'>
                      <MdDelete className='text-lg' />
                      <p className='font-semibold'>E'lonni o'chirish</p>
                    </div>
                   : "Shikoyat qilish"}
                </div>
              </div>
            </div>

            <div className='bg-white px-8 py-6 rounded-md mt-4'>
              <div className='flex justify-between items-center'>
              <div className='flex items-start gap-5 '>
                <img className='w-10 rounded-full mt-2' src={data?.authImg} alt="" />
                <div>
                  <p className='text-lg font-semibold'>{data?.auth}</p>
                  <p className='text'>Ro’yxatdan o’tgan sanasi {data?.authDate}</p>
                  <p className='text-gray-500 mt-1 mb-2'>Online</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <img src={tel} alt="" />
                <p>{data?.number}</p>
                <Button text={"Ko'rsatish"} padding={'2px 15px'} font={'semibold'} />
              </div>
              </div>
              <textarea className='p-6 h-[325px] w-full rounded-md mt-3 bg-secondary-light' type="text" placeholder='Xabaringgizni yozing...' />
              <div className='flex items-center justify-between mt-3'>
                <div className='flex items-center gap-1'>
                  <img src={file} alt="" />
                  <p>Fayl biriktirish</p>
                </div>
                <Button text={'Yuborish'} bg={'dark'} padding={'4px 25px'} />
              </div>
            </div>

          </div>
          <img src={reklama} alt="" />
        </div>

        <div>
          <h2 className='text-2xl font-bold mt-10 mb-6'>O’xshash e’lonlar</h2>
          <div className='flex gap-[15px] flex-wrap'>
            {productType?.map(item => <CategoryCard key={item.id} {...item} category={data?.category} /> )}
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-bold mb-6 mt-10'>Muallifning boshqa e’lonlari</h2>
          <div className='flex gap-[15px] flex-wrap'>
            {authProducts?.map(item => <Card key={item.id} {...item} /> )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails