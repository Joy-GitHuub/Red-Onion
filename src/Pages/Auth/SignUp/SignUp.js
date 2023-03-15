import React from 'react';
import logo from '../../../images/logo2.png';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useAuth from './../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { firebaseInfo } = useAuth();
    const [user, setUser, success, setSuccess, error, setError, isLoading, setIsLoading, handleCreateNewUser,] = firebaseInfo;



    const location = useLocation();
    const navigate = useNavigate();

    const handleUserName = (event) => {
        setName(event.target.value);
    };
    const handleUserEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleUserPassword = (event) => {
        setPassword(event.target.value);
    };
    const handleUserConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your Password And Confirm Password Not Matched');
            return;
        }
        if (password.length > 6) {
            setError('Your Password Length is Most Be 6 ');
            return
        }
        handleCreateNewUser(name, email, password, location, navigate)
    }

    return (
        <div className='sign-up-container'>
            <div className='register-container'>
                <div className="register-logo">
                    <img src={logo} alt="" />
                </div>

                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <input required className='input-field' type="text" placeholder='Name' onBlur={handleUserName} />
                        <input required className='input-field' type="email" placeholder='Email' onBlur={handleUserEmail} />
                        <input required className='input-field' type="password" placeholder='Password' onBlur={handleUserPassword} />
                        <input required className='input-field' type="password" placeholder='Confirm' onBlur={handleUserConfirmPassword} />
                        <input className='submit-field' type="submit" value="Sign-Up" />
                    </form>
                    <div className='link-text' >
                        {error && <p style={{ color: 'red', marginBottom: '10px', marginTop: '10px', fontWeight: '600', fontFamily: 'Arial, Helvetica, sans-serif' }}>{error}</p>}
                        {success && <p style={{ color: 'green', marginBottom: '10px', marginTop: '10px', fontWeight: '600', fontFamily: 'Arial, Helvetica, sans-serif' }}>{success}</p>}
                        <Link to={'/login'}>Already Have an Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;