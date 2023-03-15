import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './FoodDetail.css'
import useFoods from './../../../Hooks/useFoods';
import useAuth from './../../../Hooks/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';

const FoodDetail = () => {

    const { carts } = useAuth();
    const [cart, setCart] = carts;

    const [quantity, setQuantity] = useState(1);
    const [isSuccess, setIsSuccess] = useState(false);


    const { foods } = useFoods();
    const { id } = useParams();

    const selectedFood = foods.find((food) => food._id === id);



    const [selectedImg, setSelectedImg] = useState(null);


    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    if (id) {
        var alreadyAddToCartFood = cart.find((food) => food._id == id);
        console.log(alreadyAddToCartFood?.quantity);
    }


    const handleToCart = (item) => {
        let newCart = [];
        const exists = cart.find((food) => food._id == item._id);
        item.quantity = quantity;
        if (!exists) {
            newCart = [...cart, item];
        } else {
            const rest = cart.filter((food) => food._id != item._id);
            newCart = [...rest, item];
        }
        setCart(newCart);
        setIsSuccess(true);
    }

    if (isSuccess) {
        setTimeout(() => {
            setIsSuccess(false);
        }, 1500);
    }



    return (
        <>
            {selectedFood ?

                <div>
                    <Navbar></Navbar>
                    <div className='foods-container-box'>
                        {selectedFood?.name ? <div className='food-details-container'>
                            <div className="food-details-left-section">
                                <div className='food-details-info-container'>
                                    <h1>{selectedFood?.name}</h1>
                                    <p>{selectedFood?.fullDescription}</p>

                                    <div className='price-info'>
                                        <p>${selectedFood?.price}</p>

                                        <button
                                            onClick={handleDecrease}
                                            className="btn btn-lg me-3"><i className="fas fa-minus"></i></button>

                                        <input type="text" value={quantity} />

                                        <button
                                            onClick={handleIncrease}
                                        ><i className="fas fa-plus"></i></button>
                                    </div>

                                    <button onClick={() => handleToCart(selectedFood)} className='add-to-cart-btn'><i className='fas fa-cart-plus'></i>  Add </button>
                                    {
                                        isSuccess &&
                                        <span className='success-toast-msg'><i className='fas fa-cart-plus'></i> Item added to Cart</span>
                                    }


                                    <div className='more-image-container'>
                                        {
                                            selectedFood.images.map((img, index) => <img onClick={() => setSelectedImg(selectedFood.images[index])} height="150px" style={{ cursor: 'pointer', marginRight: '25px' }} src={img} alt="" key={index} />)
                                        }

                                    </div>

                                </div>
                            </div>

                            <div className="food-details-right-section">
                                <div className="food-details-img-container">
                                    <img src={selectedImg ? selectedImg : selectedFood?.images[0]} alt="" />
                                </div>
                            </div>


                        </div>
                            :

                            <div className='loading-container'>
                                <div className="lds-dual-ring"></div>
                            </div>
                        }
                    </div>
                    <Footer></Footer>
                </div>
                :

                <Loading></Loading>
            }
        </>
    );
};

export default FoodDetail;