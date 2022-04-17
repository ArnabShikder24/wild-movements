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
            <h3>{service.title}</h3>
            <p>{service.discription}</p>
            <p>{service.price}</p>
            <button onClick={checkOut} className='checkOut-btn'>Check Out</button>
        </div>
    );
};

export default Service;