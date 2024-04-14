import React from 'react'
import Element from './Element'
import './Section.css'

function Section() {
  return (
    <div className='section'>
      <h1>Os Nossos Serviços</h1>
      <div className='section-container'>
        <div className='section-content'>
            <ul className='elements-items'>
                <Element 
                    src='../../public/images/landscape.jpg'
                    text='Element 1'
                    path='/'
                />
                <Element 
                    src='../../public/images/logo.png'
                    text='Element 2'
                    path='/'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Section
