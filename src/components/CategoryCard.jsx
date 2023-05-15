import React from 'react'
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
  
    return (
      <div className='col-12 col-md-4 p-6 my-1'>
        <div className='card bg-dark'>
          <img src={`/assets/${category}.png`} alt='mars' style={{ width: '100%', height: '20vw', objectFit: 'cover', opacity: '0.5' }}/>
          <div class='card-img-overlay'>
            <Link className='text-decoration-none text-white card-title position-absolute top-50 start-50 translate-middle' 
              to={`/${category}`}>
              <h4>{category.toUpperCase()}</h4>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default CategoryCard
