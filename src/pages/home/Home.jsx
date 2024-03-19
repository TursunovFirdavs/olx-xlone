import React, { useState } from 'react'
import { Categories } from '../../components'
import { useGetCategory } from '../../service/query/useGetCategories'
import Card from '../../utils/Card'
import Button from '../../utils/Button'


const Home = () => {
  const [search, setSearch] = useState('')
  const { data } = useGetCategory('all')
  console.log(data);

  const filteredProduct = data?.filter(item =>
    item.title?.toLowerCase().includes(search.toLowerCase())
);

console.log(filteredProduct);

  return (
    <div>
      <div className='bg-secondary-light py-8'>
        <div className='container m-auto flex gap-3'>
          <input onChange={(e) => setSearch(e.target.value)} className='border border-gray-500 flex-1 rounded-md px-4' type="text" placeholder='Qidiruv...' />
          <Button text={'Izlash'} bg={'dark'} padding={'10px 50px'} />
        </div>
      </div>
      <Categories />
      <div className='t bg-secondary-light pt-8 pb-[56px]'>
        <div className='container m-auto'>
          <h2 className='text-2xl font-bold pb-8'>Siz uchun maxsus</h2>
          {search.length > 2 ? (
            <div className='flex gap-[15px] flex-wrap'>
            {filteredProduct?.map(item => <Card {...item} />)}
          </div>
          ) : (
            <div className='flex gap-[15px] flex-wrap'>
            {data?.map(item => <Card {...item} />)}
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home