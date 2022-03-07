import React, { useState ,useEffect} from 'react';
import  firebase  from "firebase/compat/app";
import firebaseConfig from "../firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import 'firebase/compat/auth'
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebase.auth();//creating object of firebase auth
export const FirebaseContext = React.createContext()

export const FirebaseProviderComp = ({children})=>{
    const [user]=useAuthState(firebaseAuth);
    const [auth,setAuth]= useState(null);
    useEffect(()=>{
        setAuth(firebaseAuth)
    },[])
    return(
        <FirebaseContext.Provider value={{user,auth}}>
            {children}
        </FirebaseContext.Provider>
    )
}