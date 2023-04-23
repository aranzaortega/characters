import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { Characters } from '../models/Characters';
import Card from '../components/Card';

const SearchScreen = ({ history }) => {

  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(q);
  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${inputValue}`)
    console.log(inputValue);
  }

  const getCharacters = () => {
    if(inputValue.trim() !== '') {
      const value = inputValue.toLocaleLowerCase();
      const characters = Characters.filter(character => character.name.toLocaleLowerCase().includes(value));
      setCharacters(characters);
    } else {
      setCharacters([])
    }
  }

  useEffect(() => {
    getCharacters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  return (
    <div>
      <div className='container mt-3'>
        <h2>Search</h2>
        <hr/>
        <form className='row align-items-center justify-content-md-center' onSubmit={handleSubmit}>
          <div className='col-auto'><label className='col-form-label'>Find your character by name: </label></div>
          <div className='col-9'><input placeholder='Example: James Holden' type='text'
            className='form-control' autoComplete='off' value={inputValue} onChange={handleChange}/></div>
          <div className='col-auto'><button type='submit' className='btn btn-info'>Search</button></div>
        </form>
      </div>
      <div className='container mt-3'>
        <h3>Results: {characters.length}</h3>
        <hr/>
        {characters.length === 0 && (<div className='alert alert-warning text-center'>No results</div>)}
        {characters.length > 0 && (
          <div className='row'>
            {characters.map(character => <Card key={character.id} {...character}/>)}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchScreen