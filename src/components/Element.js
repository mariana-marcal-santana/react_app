import React from 'react'
import { Link } from 'react-router-dom'

function Element(props) {
  return (
    <>
      <li className='element'>
        <Link className='element-link' to={props.path}>
            <figure className='element-figure'>
                <img className='element-image' src={props.src} alt='element' />
            </figure>
            <div className='element-info'>
                <h5 className='element-text'>{props.text}</h5>
            </div>
        </Link>
      </li>
    </>
  )
}

export default Element
