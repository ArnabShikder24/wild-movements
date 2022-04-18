import React from 'react';

const About = () => {
    return (
        <div className='container my-5 py-5'>
            <h2 className='service-header hover-underline-animation'>About Me</h2>
            <div className='photo mt-5'>
                <div>
                   <h5 className='text-center'>Photography</h5>
                   <p className='text-justify py-3'>Photography can be an art form, but not all photographs are created to be artworks or as forms of artistic expression. It took time for photography to be truly recognized as a valid art form. However, in the present day, many art museums and art galleries now exhibit photographic artworks. Photography can serve many purposes and have many facets. Photography can tell a story, it can capture a moment in time, it can document, and it can be art.</p> 
                </div>
                <div className='text-center img-section'>
                    <img src='' alt="photography" />
                </div>
            </div>
        </div>
    );
};

export default About;