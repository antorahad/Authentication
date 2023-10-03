import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from '../firebase/firebase';
export const authContext = createContext(null);
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
       const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
        })
        return () => {
            unsuscribe()
        }
    }, [])
    const authInfo = { user, createUser, signInUser }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default Authprovider;