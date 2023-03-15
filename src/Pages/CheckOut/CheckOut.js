import React, { useState } from 'react';
import Navbar from './../Shared/Navbar/Navbar';
import Footer from './../Shared/Footer/Footer';
import './CheckOut.css'
import useAuth from './../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {


    const [showCheckOutBtn, setShowCheckOutBtn] = useState(false);

    let [deliveryToDoor, setDeliveryToDoor] = useState('')
    let [roadNo, setRoadNo] = useState('');
    let [phoneNo, setPhoneNo] = useState('');
    let [houseName, setHouseName] = useState('');
    let [address, setAddress] = useState('');

    const { carts, delivery, firebaseInfo } = useAuth();
    const [cart] = carts;

    const [userInfo, setUserInfo] = delivery;

    const handleOnBlurDelivery = (e) => {
        setDeliveryToDoor(e.target.value);
    };

    const handleOnBlurRoad = (e) => {
        setRoadNo(e.target.value);
    };

    const handleOnBlurPhoneNo = (e) => {
        setPhoneNo(e.target.value);
    };

    const handleOnBlurHouse = (e) => {
        setHouseName(e.target.value);
    };

    const handleOnBlurAddress = (e) => {
        setAddress(e.target.value);
    }



    let subTotal = 0;
    for (const food of cart) {
        subTotal += food.quantity * food.price;
    };

    let deliveryFee = 0;
    if (subTotal < 30 && subTotal > 0) {
        deliveryFee = 10;
    }
    else if (subTotal < 50 && subTotal > 30) {
        deliveryFee = 20;
    } else if (subTotal > 51) {
        deliveryFee = 30
    }

    let tax = 0;
    if (subTotal < 50) {
        tax = 0;
    } else {
        tax = (subTotal * .10);
    }

    const grandTotal = subTotal + deliveryFee + tax;

    const [user] = firebaseInfo;

    const handleFromSubmitData = (event) => {
        event.preventDefault();
        setUserInfo({
            name: user.displayName,
            house: houseName,
            door: deliveryToDoor,
            country: 'BD',
            phone: phoneNo,
            address: address,
            save: true,
        })
        setShowCheckOutBtn(true);
    };

    let navigate = useNavigate();
    const handlePlaceholder = () => {
        navigate('/orderComplete');
    }

    return (
        <>
            <Navbar></Navbar>

            <div className='checkout-container'>
                <div className="edit-delivery-details-container">
                    <div className='details-container-header'>
                        <h1>Edit Delivery Details</h1>
                        <div></div>
                    </div>


                    <div className='user-details-container'>
                        <form onSubmit={handleFromSubmitData}>
                            <input className='input-text-delivery' typeof="text" required placeholder='Delivery To Door' onBlur={handleOnBlurDelivery} />
                            <input className='input-text-delivery' typeof="text" required placeholder='Road no' onBlur={handleOnBlurRoad} />
                            <input className='input-text-delivery' typeof="text" required placeholder='Phone Number' onBlur={handleOnBlurPhoneNo} />
                            <input className='input-text-delivery' typeof="text" required placeholder='House Name' onBlur={handleOnBlurHouse} />
                            <textarea typeof='text' required placeholder='Address' onBlur={handleOnBlurAddress} ></textarea>
                            <input type="submit" className='save-and-continue' value="Save & Continue" />
                        </form>

                    </div>
                </div>
                <div className="foods-order-container">
                    <div className="shop-details">
                        <h1>Form <span>Star Kabab And Restaura</span> </h1>
                        <h3>Arriving in 20-30 min
                        </h3>
                        <h3>107 Rd No 9</h3>
                    </div>

                    <div className='food-order-items-container'>
                        {
                            cart.map((food) => <div
                                key={food._id}
                            >
                                <div className="order-item-container">
                                    <div className="order-item-img">
                                        <img src={food?.images[0]} alt="" />
                                    </div>
                                    <div className='order-item-names'>
                                        <h3>{food?.name}</h3>
                                        <h3>Food Price {food?.price}</h3>
                                        <h4>Order Quantity {food?.quantity}</h4>
                                        <p>Delivery Free</p>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>

                    <div className='total-price'>
                        <div className='price-container'>
                            <p>Sub Total</p>
                            <p>${subTotal.toFixed(2)}</p>
                        </div>
                        <div className='price-container'>
                            <p>Tax</p>
                            <p>${tax.toFixed(2)}</p>
                        </div>
                        <div className='price-container'>
                            <p>Delivery Fee</p>
                            <p>${deliveryFee.toFixed(2)}</p>
                        </div>
                        <div className='price-container'>
                            <h3>Total</h3>
                            <h4>${grandTotal.toFixed(2)}</h4>
                        </div>

                        {showCheckOutBtn && <div className='nothingToCheckOut-container'>
                            <button onClick={handlePlaceholder} className='nothingToCheckOut'>Nothing To Checkout</button>
                        </div>}
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    );
};

export default CheckOut;