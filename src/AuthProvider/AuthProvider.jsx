import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {
    const auth = getAuth(app)

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //registration for the website
    const userRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //log in to the website
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signOut from the website
    const userLogout = () => {
        return signOut(auth)
    }

    // user Management 
    useEffect(() => {
        const unRegister = onAuthStateChanged(auth, (subscriber) => {
            setUser(subscriber)
            setLoading(false)
        })
        return () => {
            unRegister()
        }
    }, [])





    const userInfo = {
        user, loading,
        userRegistration,
        userLogin,
        userLogout
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;