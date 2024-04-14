import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoutes = ({children}) => {

    // check if user is authenticated 
    let {user} = useUserAuth();
    if(!user){
        <Navigate to="/" />

    }
  return children;
}

export default ProtectedRoutes;