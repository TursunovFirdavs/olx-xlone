import React, { useState } from 'react'
import { useGetCategory } from '../../service/query/useGetCategories'
import { useParams } from 'react-router-dom'
import CategoryCard from '../../components/Category-card'

const Category = () => {
    const [filter, setFilter] = useState('')
    const { category } = useParams()
    const { data } = useGetCategory(category)
    console.log(category);

    const filteredCategory = data?.filter(item => item.location?.toLowerCase().includes(filter.toLowerCase()))
    console.log(filteredCategory);

    return (
        <div className='bg-secondary-light pt-8 pb-[56px]'>
            <div className='container m-auto '>
                <form className='mb-10'>
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>lokatsiya</h3>
                        <select onChange={(e) => setFilter(e.target.value)} className='px-4 py-2'>
                            <option value="Toshkent">Toshkent</option>
                            <option value="Samarqand">Samarqand</option>
                            <option value="Jizzax">Jizzax</option>
                            <option value="Andijon">Andijon</option>
                            <option value="Xorazm">Xorazm</option>
                        </select>
                    </div>
                </form>
                <h2 className='text-3xl font-bold pb-8'>{category.toLocaleUpperCase()}</h2>
                {filter.length ?
                    <div>
                        {filteredCategory.length ? 
                            <div className='flex gap-[15px] flex-wrap'>
                                {filteredCategory?.map(item => <CategoryCard {...item} category={category} />)}
                            </div>
                            :
                            <p className='text-center text-4xl font-bold'>Siz istagan e'lon topilmadi !</p>
                        }
                    </div> :
                    <div className='flex gap-[15px] flex-wrap'>
                        {data?.map(item => <CategoryCard key={item.id} {...item} category={category} />)}
                    </div>
                }
            </div>
        </div>
    )
}

export default Category