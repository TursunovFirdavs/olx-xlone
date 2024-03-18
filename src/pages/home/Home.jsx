import React from 'react'
import { Categories } from '../../components'
import { useGetCategory } from '../../service/query/useGetCategories'
import Card from '../../utils/Card'


const Home = () => {

  const { data } = useGetCategory('all')
  console.log(data);

  return (
    <div>
      <Categories />
      <div className='t bg-secondary-light pt-8 pb-[56px]'>
        <div className='container m-auto'>
          <h2 className='text-2xl font-bold pb-8'>Siz uchun maxsus</h2>
          <div className='flex gap-[15px] flex-wrap'>
            {data?.map(item => <Card {...item} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home