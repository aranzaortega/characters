import React from 'react'

const HomeScreen = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 text-center">
      <div>
        <h1 className='display-4 fw-normal'>Meet The Expanse Series Characters</h1>
        <p className='lead fw-normal'>Find everything you want to know about your favorite characters</p>
      </div>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-4 p-6'>
            <div className='card bg-dark text-white'>
              <img src='/assets/mars.png' alt='mars' style={{ width: '100%', height: '20vw', objectFit: 'cover', opacity: '0.5' }}/>
              <div class='card-img-overlay' >
                <h4 class='card-title position-absolute top-50 start-50 translate-middle'>Mars</h4>
              </div>
            </div>
          </div>
          <div className='col-4 p-6'>
            <div className='card bg-dark text-white'>
              <img src='/assets/earth.png' alt='earth' style={{ width: '100%', height: '20vw', objectFit: 'cover', opacity: '0.5' }}/>
              <div class='card-img-overlay'>
                <h4 class='card-title position-absolute top-50 start-50 translate-middle'>Earth</h4>
              </div>
            </div>
          </div>
          <div className='col-4 p-6'>
            <div className='card bg-dark text-white'>
              <img src='/assets/characters.jpg' alt='characters' style={{ width: '100%', height: '20vw', objectFit: 'cover', opacity: '0.5' }}/>
              <div class='card-img-overlay'>
                <h4 class='card-title position-absolute top-50 start-50 translate-middle'>Search</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen