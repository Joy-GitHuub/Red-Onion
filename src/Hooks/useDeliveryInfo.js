import { useState } from 'react';

const useDeliveryInfo = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        house: '',
        door: '',
        country: 'BD',
        phone: '',
        address: '',
        save: false
    })



    return [userInfo, setUserInfo];
};

export default useDeliveryInfo;