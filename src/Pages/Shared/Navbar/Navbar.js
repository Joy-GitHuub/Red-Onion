import React from 'react';
import './Navbar.css'
import logo from '../../../images/logo2.png';
import shop from '../../../images/shopping.png';
import { Link } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';


const Navbar = () => {

    const { carts, firebaseInfo } = useAuth();

    const [cart] = carts;

    const [user, setUser, success, setSuccess, error, setError, isLoading, setIsLoading, handleCreateNewUser, handleUserLogIn, handleLogOutUser] = firebaseInfo;

    const handleSingOut = () => {
        handleLogOutUser();
    }

    return (
        <div className='container'>
            <div className='nav-container'>
                <div className='navbar-left'>
                    <Link to={'/home'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-right">
                    <ul>
                        <Link className='checkout-link' to={'/checkout'}>
                            <li style={{ marginRight: '10px' }} className='shop-cart'><img src={shop} alt="" />

                                <span>
                                    {
                                        cart.length ? cart.length : 0
                                    }</span>
                            </li>
                        </Link>
                        {!user?.email && <li><Link to='/login'>Log-In</Link></li>}
                        {!user?.email && <li className='sign-up'><Link to='/sign-up' >Sign-Up</Link></li>}
                        {user?.email &&
                            <img style={{ width: '30px', marginRight: '10px' }}
                                src={user?.photoURL} alt="" />}


                        {user?.email && <button className='sign-out' onClick={handleSingOut}>Sign-Out</button>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;