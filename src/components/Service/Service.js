import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const navigate = useNavigate();
    const checkOut = () => {
        navigate(`service/${service.id}`);
    }
    return (
        <div className='service-item p-2'>
            <img src={service.picture} alt={service.title} />
            <h5 className='py-2'>{service.title}</h5>
            <p>{service.discription}</p>
            <p className='fs-4 text-primary'>{service.price}</p>
            <button onClick={checkOut} className='checkOut-btn mb-1'>Check Out</button>
        </div>
    );
};

export default Service;