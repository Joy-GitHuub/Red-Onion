import React, { createContext } from 'react';
import useCart from './../Hooks/useCart';
import useFirebase from './../Hooks/useFirebase';
import useDeliveryInfo from './../Hooks/useDeliveryInfo';

export const context = createContext();

const AuthProvider = ({ children }) => {

    const [cart, setCart] = useCart();
    const { user, setUser, success, setSuccess, error, setError, isLoading, setIsLoading, handleCreateNewUser, handleUserLogIn, handleLogOutUser } = useFirebase();

    const [userInfo, setUserInfo] = useDeliveryInfo();

    return (
        <context.Provider value={{ carts: [cart, setCart], firebaseInfo: [user, setUser, success, setSuccess, error, setError, isLoading, setIsLoading, handleCreateNewUser, handleUserLogIn, handleLogOutUser], delivery: [userInfo, setUserInfo] }}>
            {children}
        </context.Provider>
    )

};

export default AuthProvider;