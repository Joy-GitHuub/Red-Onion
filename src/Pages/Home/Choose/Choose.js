import React from 'react';
import './Choose.css'

import img1 from '../../../images/adult-blur-blurred-background-687824.png';
import img2 from '../../../images/chef-cook-food-33614.png';
import img3 from '../../../images/architecture-building-city-2047397.png';



const Choose = () => {



    return (
        <div className='choose-container'>
            <div className="choose-header">
                <h1>Why Choose Us</h1>
                <p>Barton waited twenty always repair in within we do . An delighted offending <br /> curiosity my is dash woods at. Boy prosperous increasing surrounded. </p>
            </div>

            <div className="choose-gallery">
                <div className="card-container">
                    <div className="card-section">
                        <div className="card-img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="card-info">
                            <div className="card-info-img">
                                <img src="https://i.ibb.co/1nz9kZH/bus.png" alt="" />
                            </div>

                            <div className='info-details'>
                                <h3>Quick Delivery</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ullam commodi animi doloribus accusamus est reprehenderit sit corrupti, quas nam?</p>

                            </div>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="card-img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="card-info">
                            <div className="card-info-img">
                                <img src="https://i.ibb.co/k1zY2Qr/notification.png" alt="" />
                            </div>

                            <div className='info-details'>
                                <h3>A Good Auto Responder</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ullam commodi animi doloribus accusamus est reprehenderit sit corrupti, quas nam?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="card-img">
                            <img src={img3} alt="" />
                        </div>
                        <div className="card-info">
                            <div className="card-info-img">
                                <img src="https://i.ibb.co/nb6vFyC/car.png" alt="" />
                            </div>

                            <div className='info-details'>
                                <h3>Home Delivery</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ullam commodi animi doloribus accusamus est reprehenderit sit corrupti, quas nam?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;