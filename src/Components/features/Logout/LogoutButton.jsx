import React,{useContext} from 'react';
import { FirebaseContext } from '../../../Context/firebase-context';


export default function LogoutButton() {
    const {auth} = useContext(FirebaseContext)

    return (
    <button onClick={()=>auth.signOut()}>
        LogoutButton
    </button>
  )
}
