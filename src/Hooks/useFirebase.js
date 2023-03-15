import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from './../firebase.init';


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const handleCreateNewUser = (name, email, password, location, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateUserProfile(name);
                const user = userCredential.user;
                setUser(user);
                setError('');
                setSuccess('Your Account Create SuccessFully...');
                const destination = location.state?.from || "/";
                navigate(destination);
            })
            .catch((error) => {
                setSuccess('');
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setIsLoading(false));
    };


    const handleUserLogIn = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setSuccess('Your Account Login SuccessFully....')
                setError('');
                const destination = location.state?.from || "/";
                navigate(destination);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                setSuccess('');
            }).finally(() => setIsLoading(false));
    }


    const updateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://i.ibb.co/fGqS1Dw/profile.webp"
        }).then(() => {
        }).catch((error) => {
        });
    };

    const handleLogOutUser = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
        });
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);

    return {
        user,
        setUser,
        success,
        setSuccess,
        error,
        setError,
        isLoading,
        setIsLoading,
        handleCreateNewUser,
        handleUserLogIn,
        handleLogOutUser
    }

};

export default useFirebase;