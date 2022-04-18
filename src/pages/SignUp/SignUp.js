import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import gIcon from '../../images/google.png';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [notMatch, setNotMatch] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    // user condition
    if(user) {
        console.log(user)
    }
    if(googleUser) {
        console.log(googleUser)
    }

    // sing up and update profie function
    const handleSignUp = async e => {
        e.preventDefault();
        if(password !== confirm) {
            setNotMatch('password not match')
            return;
        }
        setNotMatch('')
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
    }

    // Sign in with google 
    const handleGoogleSignUp = () => {
        signInWithGoogle()
    }

    return (
        <div className='food-flex my-5 py-5'>
            <div className='form'>
                <h2 className='mb-4'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="input-group">
                        <input onBlur={e => setName(e.target.value)} type="text" placeholder='Name' required/>
                    </div>
                    <div className="input-group">
                        <input onBlur={e => setEmail(e.target.value)} type="email" placeholder='Email' required/>
                    </div>
                    <div className="input-group">
                        <input onBlur={e => setPassword(e.target.value)} type="password" placeholder='Password' required/>
                    </div>
                    <div className="input-group">
                        <input onBlur={e => setConfirm(e.target.value)} type="password" placeholder='Confirm Password' required/>
                    </div>
                    <p className='mb-2 text-center'>{loading && 'Loading...'}</p>
                    <p className='mb-2 text-center'>{googleLoading && 'Loading...'}</p>
                    <p className='mb-2 text-danger text-center'>{error && error?.message}</p>
                    <p className='mb-2 text-danger text-center'>{googleError && googleError?.message}</p>
                    <p className='mb-2 text-danger text-center'>{notMatch}</p>
                    <p className='mb-2 text-success text-center'>{user && 'Sign Up Successful'}</p>
                    <input type="submit" value="Sign Up" />
                </form>
                <p className='my-2'>Alreay have an account? <Link className='create' to='/login'>Login</Link></p>
                <div className='or'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <div className='text-center'>
                    <button onClick={handleGoogleSignUp} className='google-btn'>
                        <img className='pe-2' width='30' src={gIcon} alt="google icon" />
                        Sign up with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;