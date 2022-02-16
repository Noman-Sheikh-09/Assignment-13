import React from 'react'
import './headerStyle.css'
export default function Header() {
  return (
    <div>
      <div className='container header-bg'>
        <div className='row'>
          <div className='col-md-5'>
            <h1 className='header-title'>Title of a longer featured blog post</h1>
            <p className='header-sub-title-1'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
            <p className='header-sub-title-2'>Continue Reading...</p>
          </div>
          <div className='col-md-7'>

          </div>
        </div>
      </div>
    </div>
  )
}
