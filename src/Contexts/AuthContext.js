import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password){
        auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, passowrd){
        return auth.signInWithEmailAndPassword(email, passowrd)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{setCurrentUser(user);setLoading(false);})
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup
    }

    return (
        <AuthContext.Provider value={value}> {!loading && children} </AuthContext.Provider>
    )
}
