import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

// lets create a provider function
export function UserAuthContextProvider({children}){

    const [user, setUser] = useState("")
    // sign up function
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // log in function 
    function logIn(email, password){
return signInWithEmailAndPassword(auth, email, password)        
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

        });
        return () => {
            unsubscribe();
        }

    }, [])
    return (
        <userAuthContext.Provider value={{user, signUp}}>
            {children}
        </userAuthContext.Provider>
    )
}

// create custom Hook to use context
export function useUserAuth(){
    return useContext(userAuthContext)
}