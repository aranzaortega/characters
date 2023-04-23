import React from 'react'
import Card from '../components/Card'
import { Characters } from '../models/Characters'

const CategoryScreen1 = () => {
  const earth = Characters.filter( character => character.type === "earth")

  return (
    <div className='container mt-3'>
      <h1>Earth</h1>
      <hr/>
      <div className='row'>
        {earth.map((character) => (
          <Card key={character.id} {...character}/>
        ))}
      </div>
    </div>
  )
}

export default CategoryScreen1