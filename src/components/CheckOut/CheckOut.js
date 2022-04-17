import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId} = useParams();
    return (
        <div className='container my-5 py-5'>
            <h1>{serviceId}</h1>
        </div>
    );
};

export default CheckOut;