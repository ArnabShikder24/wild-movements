import React from 'react';
import './Photography.css';
import photograph from '../../images/photographer.jpg'

const Photography = () => {
    return (
        <div className='container mb-5 pb-5'>
            <h2 className='service-header hover-underline-animation'>Photography</h2>
            <div className='photo mt-5'>
                <div>
                   <h5 className='text-center'>Photography</h5>
                   <p className='text-justify py-3'>Photography can be an art form, but not all photographs are created to be artworks or as forms of artistic expression. It took time for photography to be truly recognized as a valid art form. However, in the present day, many art museums and art galleries now exhibit photographic artworks. Photography can serve many purposes and have many facets. Photography can tell a story, it can capture a moment in time, it can document, and it can be art.</p> 
                </div>
                <div className='text-center img-section'>
                    <img src={photograph} alt="photography" />
                </div>
            </div>
        </div>
    );
};

export default Photography;