import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Placeholder.css'
import useAuth from './../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Placeholder = () => {

    const { delivery, carts } = useAuth();

    const [userInfo] = delivery;
    const [cart, setCart] = carts;

    const navigate = useNavigate();
    const handleBackToHome = () => {
        setCart([]);
        navigate('/');
    }


    return (
        <>
            <Navbar></Navbar>


            <div className='order-complete-container'>
                <div className="map-container">
                    <iframe className="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.764490244959!2d90.37294121429777!3d23.791399393127286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7762b5f6875%3A0xaefd4e235eb09ba2!2sRed%20Onion%20Restaurent!5e0!3m2!1sbn!2sbd!4v1634304364926!5m2!1sbn!2sbd" width="600" height="500" allowfullscreen="" loading="lazy" />

                </div>

                <div className="order-user-detail-container">
                    <div className='rider-pic'>
                        <img src="https://red-onion-restaurant-me.netlify.app/static/media/delivery-img.79a1e10d.png" alt="" />
                    </div>


                    <div className="user-info-container">
                        <h3>Phone Number: {userInfo.phone}</h3>

                        <div className='user-location'>
                            <h3>Your Location: </h3>
                            <h4>Address:  {userInfo.address}, {userInfo.house}</h4>
                            <h4>Country: {userInfo.country}</h4>
                        </div>

                        <p className="delivery-from">Delivery from, Red Onion Restaurant.</p>
                    </div>

                    <div className='rider-info'>
                        <img src="https://red-onion-restaurant-me.netlify.app/static/media/Group%201152.7ac997a6.png" alt="" />
                        <div>
                            <h6 className="rider-name">Hamim</h6>
                            <p>Your Rider</p>
                        </div>
                        <button
                            onClick={handleBackToHome}
                            className='back-to-home'>Back To Home</button>
                    </div>


                </div>
            </div>

        </>
    );
};

export default Placeholder;