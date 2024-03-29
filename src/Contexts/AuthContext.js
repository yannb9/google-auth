import React, {useContext, useState, useEffect} from 'react'
import fbase, {  auth  } from '../firebase'

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

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email){
        return currentUser.updateEmail(email);
    }
    function updatePassword(password){
        return currentUser.updatePassword(password)
    }

    function addToFirebaseDB(object){
        return fbase.database().ref('GRObject').push(object)

    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{setCurrentUser(user);setLoading(false);})
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        addToFirebaseDB
    }

    return (
        <AuthContext.Provider value={value}> {!loading && children} </AuthContext.Provider>
    )
}
