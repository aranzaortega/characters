import React from 'react'
import CategoryCard from '../components/CategoryCard'

const HomeScreen = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 text-center">
      <div>
        <h1 className='display-4 fw-normal'>Meet The Expanse Series Characters</h1>
        <p className='lead fw-normal'>Find everything you want to know about your favorite characters</p>
      </div>
      <div className='container my-5'>
        <div className='row'>
          <CategoryCard category={'mars'}/>
          <CategoryCard category={'earth'}/>
          <CategoryCard category={'search'}/>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen