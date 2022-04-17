import React from 'react';
import './NotFound.css';
import page2 from '../../images/404-page2.png';

const NotFound = () => {
    return (
        <div className='container py-5 my-3 not-found'>
            <img src={page2} alt="" />
        </div>
    );
};

export default NotFound;