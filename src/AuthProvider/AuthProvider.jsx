import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {
    const auth = getAuth(app)

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //registration for the website
    const userRegistrations = (email, password) => {
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

    //signIn with google account
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
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
        userRegistrations,
        userLogin,
        googleSignIn,
        userLogout
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;