import { useContext } from 'react';
import { context } from './../Context/AuthProvider';

const useAuth = () => {
    return useContext(context);
};

export default useAuth;