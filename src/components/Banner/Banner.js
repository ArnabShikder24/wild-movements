import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
           <div className='text-white h-100 d-flex align-items-center'>
               <div className='container banner-info'>
                    <h1>Nature Photography</h1>
                    <h3>Close to your eyes</h3>
                    <p>VIDEO AND PHOTO PRODUCTION</p>
                    <Link to='/about' className='about-btn'>About Me</Link>
               </div>
           </div>
        </div>
    );
};

export default Banner;