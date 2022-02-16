import React from 'react'
import './contentStyle.css';

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

                        <h1 className='heading'>Heading</h1>
                        <p className='heading-para-1'>Lorem ipsum dolor sit amet,ncdkn kdnfkd oso consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                        <h2 className='sub-heading-1'>Sub Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p>
                        <p>Lorem ipsum dolor , <br /></p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismomjcdonckd sed diam nonummy knfk ksnd osso ncdkn nibh euismod tincidunt ut laoreet dolore magna</p>
                        <h2 className='sub-heading-1'>Sub Heading</h2>
                        <p>Lorem ipsum dolor sit amet,  ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mxt of the printing and typesetting industry</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet,  ut laoreet dolore magna.</li>
                            <li>Lorem ipsum dolor sit amet,  ut laoreet dolore magna.</li>
                            <li>Lorem ipsum dolor sit amet,  ut laoreet dolore magna.</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet,  ut laoreet dolore magna.Lorem Ipsum is simply dLorem Ipsum </p>
                        <ol>
                            <li>Lorem ipsum dolor sit amet,  ut laoreet dolore magna</li>
                            <li>Lorem ipsum dolor sit amet,  ut laoreet dolore magna</li>
                            <li>Lorem ipsum dolor sit amet,  ut laoreet dolore magna</li>
                        </ol>
                        <p>Lorem ipsum dolor sit amet,  ut laoreet dolore magna.Lorem Ipsum is simply dLorem Ipsum dollar</p>

                        <h1 className='blog-heading'>Another Blog Post</h1>
                        <p className='date-title-blog'>December 23,2023 by <span className='jacob'>jacob</span></p>
                        <p className='blog-para-1'>Lorem ipsum dolor sit amet, <spna className='blog-blue'>consectetuer adipiscing elit,</spna>   sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <p className='blog-para-2'>Lorem ipsum dolor sit amet,<spna className='blog-bold'>consectetuer adipiscing elit,</spna>  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. </p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. </p>
                        <h1 className='feature-heading'>New Feature</h1>
                        <p className='feature-date'>December 19,2015 by <span className='feature-blue'>clvis</span></p>
                        <p className='feature-para-1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore nosm bdondc oskn ohdks magna.</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ut laoreet dolore magna.</p>




                    </div>
                    <div className='col-md-4'>
                        <div className='bg-grey'>
                            <h4 className='heading-sidebar'>About</h4>
                            <p className='para-sidebar'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                        </div>
                        <h4 className='heading-sidebar-2'>Archives</h4>
                        <ol>
                            <li>March 2014</li>
                            <li>December 2014</li>
                            <li>Febuary 2004</li>
                            <li>April 2014</li>
                            <li>March 2014</li>
                            <li>April 2014</li>
                            <li>March 2014</li>
                            <li>May 2014</li>
                            <li>January 2014</li>
                            <li>August 2014</li>
                            <li>September 2014</li>
                            <li>November 2014</li>

                        </ol>
                        <h4 className='heading-sidebar-2'>Elsewhere</h4>
                        <ol>
                            <li>Github</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
