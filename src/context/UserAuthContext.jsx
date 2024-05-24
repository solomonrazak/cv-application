import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
    
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
    //sign out function
    function logOut(){
        return signOut(auth)
    }
    // google sign in
    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }
    // Reset password function
    async function resetPassword(){
        return await sendPasswordResetEmail(auth, email)

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
        <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn, resetPassword}}>
            {children}
        </userAuthContext.Provider>
    )
}

// create custom Hook to use context
export function useUserAuth(){
    return useContext(userAuthContext)
}