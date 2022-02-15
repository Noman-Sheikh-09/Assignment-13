import React from 'react'
import './buttonStyle.css'
export default function Button() {
  return (
    <div>
        <div className='container buttons'>
        <button className='older-button'>Older</button>
        <button className='newer-button'>Newer</button>
        </div>
    </div>
  )
}
