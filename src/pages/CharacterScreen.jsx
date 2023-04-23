import React from 'react'
import { useParams } from 'react-router'
import { Characters } from '../models/Characters';

const CharacterScreen = ({history}) => {

  const { id } = useParams();
  const { type, name, description } = Characters.find(character => character.id === id)
  const path = `/assets/${id}.jpg`;
  const handleBack = () => history.goBack();

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <img src={path} className='img-thumbnail mt-3' alt={id}
            style={{ width: '50vh', height: 'auto'}}/>
        </div>
        <div className='col-md-6 col-sm-12 py-5'>
          <h2>Name: {name}</h2>
          <h3>Planet: {type}</h3>
          <p>Description: {description}</p>
          <button className='btn btn-outline-info' onClick={handleBack}>Go back</button>
        </div>
      </div>
    </div>
  )
}

export default CharacterScreen