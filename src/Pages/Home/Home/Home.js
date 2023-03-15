import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from './../Banner/Banner';
import Choose from './../Choose/Choose';
import Foods from './../Foods/Foods';
import useFoods from './../../../Hooks/useFoods';
import Loading from '../../Shared/Loading/Loading';

const Home = () => {
    const { foods } = useFoods();
    console.log(foods.length);
    return (
        <div>
            {
                foods.length ?
                    <div>
                        <Navbar></Navbar>
                        <Banner></Banner>
                        <Foods></Foods>
                        <Choose></Choose>
                        <Footer></Footer>
                    </div>
                    :
                    <Loading></Loading>
            }
        </div>
    );
};

export default Home;