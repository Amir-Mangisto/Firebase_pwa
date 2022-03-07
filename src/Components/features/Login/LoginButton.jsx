import React,{useContext} from 'react';
import { FirebaseContext } from '../../../Context/firebase-context';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function LoginButton() {
  const {auth,user} = useContext(FirebaseContext);

  const googleLogin = ()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider)
  }
  return (
    <>
    {user?.displayName}
    <button onClick={googleLogin}>
      <h1>Login with Google</h1>
    </button>
    </>
  )
}
