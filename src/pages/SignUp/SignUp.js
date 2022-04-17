import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [
        createUserWithEmailAndPassword,
        user
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile] = useUpdateProfile(auth);

    if(user) {
        console.log(user)
    }

    const handleSignUp = async e => {
        e.preventDefault();
        if(password !== confirm) {
            console.log('password not match')
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
    }

    return (
        <div className='food-flex my-5'>
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
                    <input type="submit" value="Sign Up" />
                </form>
                <p className='my-2'>Alreay have an account? <Link className='create' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;