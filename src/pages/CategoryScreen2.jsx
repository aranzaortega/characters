import React from 'react'
import Card from '../components/Card'
import { Characters } from '../models/Characters'

const CategoryScreen2 = () => {
  const mars = Characters.filter( character => character.type === "mars")

  return (
    <div className='container mt-3'>
      <h1>Mars</h1>
      <hr/>
      <div className='row'>
        {mars.map((character) => (
          <Card key={character.id} {...character}/>
        ))}
      </div>
    </div>
  )
}

export default CategoryScreen2