import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    if(user) {
        console.log(user)
        navigate(from, {replace: true})
    }

    return (
        <div className='food-flex my-5 py-5'>
            <div className='form'>
                <h2 className='mb-4'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input onBlur={e => setEmail(e.target.value)} type="email" placeholder='Your Email' required/>
                    </div>
                    <div className="input-group">
                        <input  onBlur={e => setPassword(e.target.value)} type="password" placeholder='Your Password' required/>
                    </div>
                    <p className='mb-2 text-center'>{loading && 'Loading...'}</p>
                    <p className='mb-2 text-danger text-center'>{error && error?.message}</p>
                    <input type="submit" value="Login" />
                </form>
                <p className='my-2'>New in Wild Movements? <Link className='create' to='/signup'>Create Account</Link></p>
            </div>
        </div>
    );
};

export default Login;