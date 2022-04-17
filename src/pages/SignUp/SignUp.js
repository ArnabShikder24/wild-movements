import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='food-flex my-5'>
            <div className='form'>
                <h2 className='mb-4'>Sign Up</h2>
                <form >
                    <div className="input-group">
                        <input type="text" placeholder='Name' required/>
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder='Email' required/>
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder='Password' required/>
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder='Confirm Password' required/>
                    </div>
                    <input type="submit" value="Sign Up" />
                </form>
                <p className='my-2'>Alreay have an account? <Link className='create' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;