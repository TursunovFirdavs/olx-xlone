import React from 'react'
import { useGetCategory } from '../../service/query/useGetCategories'
import { useParams } from 'react-router-dom'
import CategoryCard from '../../components/Category-card'

const Category = () => {
    const {category} = useParams()
    const {data} = useGetCategory(category)

  return (
    <div className='bg-secondary-light pt-8 pb-[56px]'>
        <div className='container m-auto '>
            <h2 className='text-3xl font-bold pb-8'>{category.toLocaleUpperCase()}</h2>
            <div className='flex gap-[15px] flex-wrap'>
                {
                    data?.map(item => <CategoryCard {...item} category={category} />)
                }
            </div>
        </div>
    </div>
  )
}

export default Category