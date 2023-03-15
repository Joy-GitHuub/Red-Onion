import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="banner">

                <h1>Best Food Waiting For Your Belly</h1>

                <div className='search-container'>
                    <input type="text" placeholder='Search Your Favorite Food....' />
                    <button className='search-btn'>Search</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;