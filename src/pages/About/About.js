import React from 'react';
import aboutMe from '../../images/aboutme.jpg';
import './About.css'

const About = () => {
    return (
        <div className='container my-5 py-5'>
            <h2 className='service-header hover-underline-animation'>About Me</h2>
            <div className='photo mt-5'>
                <div>
                   <h5 className='text-center'>About My Goal</h5>
                   <p className='text-justify py-3'>I want to see myself as a MERN stack developer. I have never been so active before doing this course. This course has changed my habit. And I am willing to work hard to achieve my goals. I always try to finish class in on time. So far I have finished all the modules on time. And I want to work hard at it in the end. Thanks Programming Hero Team.</p> 
                </div>
                <div className='text-center img-section'>
                    <img className='about-img' src={aboutMe} alt="photography" />
                </div>
            </div>
        </div>
    );
};

export default About;