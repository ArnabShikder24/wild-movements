import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices();
    console.log(services)
    return (
        <div className='container my-5 py-5'>
            <h2 className='service-header hover-underline-animation'>Services</h2>
            <div className='text-center food-flex'>
                <div className='services-items mt-5'>
                    {
                        services.map(service => <Service 
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;