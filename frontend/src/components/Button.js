import React from 'react'
import './Button.css'


export default function Button(props) {
  return (
    <div>
        
        <button className='button-home'>{props.Name}</button>
      
    </div>
  )
}