import React from 'react'
import { Characters } from '../models/Characters'

const CategoryScreen1 = () => {
  const earth = Characters.filter( character => character.type === "earth")

  return (
    <div className='container mt-3'>
      <h1>Earth</h1>
      <hr/>
      {earth.map(character => <h1>{character.id}</h1>)}
    </div>
  )
}

export default CategoryScreen1