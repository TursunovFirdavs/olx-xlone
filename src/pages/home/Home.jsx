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
      <div>
        <div>
          {data?.map(item => <Card {...item} />)}
        </div>
      </div>
    </div>
  )
}

export default Home