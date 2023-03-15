import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css'

const Food = ({ food }) => {
    const { _id, name, images, price, shortDescription } = food;

    return (
        <div className='food'>
            <Link to={`/detail/${_id}`}>
                <div className="card">
                    <div className="food-card-img">
                        <img src={images[0]} alt="" />
                    </div>
                    <div className="food-card-info">
                        <h3>{name}</h3>
                        <p>{shortDescription}</p>
                        <h5>${price}</h5>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Food;