import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Spin.css'

const Spin = () => {
    return (
        <div className='spin'>
            <Spinner animation="grow" variant="primary" />
        </div>
    );
};

export default Spin;