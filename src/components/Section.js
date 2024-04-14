import React from 'react'
import Element from './Element'

function Section() {
  return (
    <div className='section'>
      <h1>Section</h1>
      <div className='section-container'>
        <div className='section-content'>
            <ul className='elements-items'>
                <Element 
                    src='../../public/images/logo.png'
                    text='Element 1'
                    path='/'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Section
