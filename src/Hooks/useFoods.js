import { useEffect, useState } from 'react';

const useFoods = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        // const url = `https://red-onion-backend.herokuapp.com/foods`;
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => {
                setFoods(data)
            })
    }, []);

    return { foods, setFoods }
};

export default useFoods;