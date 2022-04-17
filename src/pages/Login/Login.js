import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import gIcon from '../../images/google.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

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
    if(googleUser) {
        console.log(googleUser)
        navigate(from, {replace: true})
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    const handleResetPassword = async () => {
        if(email) {
            toast('Sent email');
        }
        else {
            toast('Give me your Email')
            return;
        }
        await sendPasswordResetEmail(email);
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
                    <p className='mb-2 text-center'>{googleLoading && 'Loading...'}</p>
                    <p className='mb-2 text-danger text-center'>{error && error?.message}</p>
                    <p className='mb-2 text-danger text-center'>{googleError && googleError?.message}</p>
                    <input type="submit" value="Login" />
                </form>
                <p className='my-2'>New in Wild Movements? <Link className='create' to='/signup'>Create Account</Link></p>
                <p className='my-2'>Forget Password? <button onClick={handleResetPassword} className='btn btn-link text-decoration-none'>Reset Password</button></p>
                <div className='or'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <div className='text-center'>
                    <button onClick={handleGoogleSignIn} className='google-btn'>
                        <img className='pe-2' width='30' src={gIcon} alt="google icon" />
                        Sign in with google</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;