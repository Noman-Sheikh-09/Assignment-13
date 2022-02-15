import React from 'react'
import './cardsStyle.css'
export default function Cards() {
  return (
    <div>
        <div className='container cards-part'>
<div className='row'>
<div className='col-md-4 card-shadow'>
  <p className='first-title'>World</p>
  <h2 className='main-title'>Featured Post</h2>
  <p className='sub-title'>Nov 12
  <br/>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
  <br/>
  </p>
<p className='last-title'>Continue Reading...</p>
</div>
<div className='col-md-2 card-img-bg'><p className='card-img-1'>Thumbnail</p></div>
<div className='col-md-4 card-2 card-shadow'><p className='first-title'>Design</p>
  <h2 className='main-title'>Post title</h2>
  <p className='sub-title'>Nov 11
  <br/>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
  <br/>
  </p>
<p className='last-title'>Continue Reading...</p></div>
<div className='col-md-2 card-img-bg '><p className='card-img-1'>Thumbnail</p></div>
</div>
        </div>
    </div>
  )
}
