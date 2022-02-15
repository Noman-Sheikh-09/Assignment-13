import React from 'react'
import './contentStyle.css';
// import Heading from './components/heading/Heading'
export default function Content() {
    return (
        <div>
            <div className='container main-content'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h1 className='content-title-1'>From the Firehose</h1>
                        <hr className='first-hr-line' />
<h1 className='content-title-2'>Sample Blog Post</h1>
<p className='content-date-1'>January 1, 2014 by <span className='march'>March</span></p>
<p className='content-para-1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy helo.,ndcknfcd nibh euismod tincidunt ut laoreet dolore magna.</p>
<p className='content-para-2'>Lorem ipsum dolor sit amet,  <span className='blue'>consectetuer</span> adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
<p className='content-para-3'>Lorem ipsum dolor sit amet,<span className='bold'> consectetuer adipiscing elit,</span> sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
<p className='content-para-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
{/* <Heading/> */}


                    </div>
                    <div className='col-md-4'>

                    </div>
                </div>
            </div>
        </div>
    )
}
