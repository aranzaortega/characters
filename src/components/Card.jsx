import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({name, description, type, id}) => {
  
    const path = `/assets/${id}.jpg`;
  
    return (
    <div className="card m-3 col-12 col-md-4" style={{width: 200}}>
      <img src={path} alt={id} className='card-img-top' style={{width: '100%', height: '20vw', objectFit: 'cover'}}/>
      <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link className='btn btn-info' to={`/character/${id}`}>
              More info
          </Link>
      </div>
    </div>
    )
}

export default Card