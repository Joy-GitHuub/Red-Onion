import React from 'react';
import { useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'
import useFoods from './../../../Hooks/useFoods';

const Foods = () => {

    const [selectedFoodType, setSelectedFoodType] = useState("Breakfast");

    const { foods } = useFoods();


    const selectedFoods = foods.filter(food => food.type === selectedFoodType);

    return (
        <div className='foods-container'>
            <div className='selected-items-container'>
                <ul className='selected-items'>
                    <li onClick={() => setSelectedFoodType("Breakfast")}>BreakFast</li>
                    <li onClick={() => setSelectedFoodType("Lunch")}>Lunch</li>
                    <li onClick={() => setSelectedFoodType("Dinner")}>Dinner</li>
                </ul>
            </div>

            <div className='foods-section'>
                {foods.length &&
                    selectedFoods.map((food) => <Food
                        key={food._id}
                        food={food}
                    ></Food>)
                }
                {
                    !foods.length &&
                    <div className='loading-container'>
                        <div className="lds-dual-ring"></div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Foods;