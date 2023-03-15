import React, { useState } from 'react';
import logo from '../../../images/logo2.png';
import { Link } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const LogIn = () => {

    const { firebaseInfo } = useAuth();
    const [user, setUser, success, setSuccess, error, setError, isLoading, setIsLoading, handleCreateNewUser, handleUserLogIn, handleLogOutUser] = firebaseInfo;


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const handleUserEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleUserPassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        handleUserLogIn(email, password, location, navigate);
    }

    return (
        <div className='sign-up-container'>
            <div className='register-container'>
                <div className="register-logo">
                    <img src={logo} alt="" />
                </div>

                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <input required className='input-field' type="text" placeholder='Email' onBlur={handleUserEmail} />
                        <input required className='input-field' type="text" placeholder='Password' onBlur={handleUserPassword} />
                        <input className='submit-field' type="submit" value="Sign-Up" />
                    </form>
                    <div className='link-text'>
                        <Link to={'/sign-up'}>Create a new Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;