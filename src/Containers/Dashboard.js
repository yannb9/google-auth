import React, {useState} from 'react'
import { Styles } from '../StyledComp'
import { useAuth } from '../Contexts/AuthContext';
import {  auth, db } from '../firebase'

export default function Dashboard() {
    const { currentUser, logout, updateEmail, updatePassword } = useAuth();
    // const nameRef = useRef();
    // const emailRef = useRef();
    // const passwordRef = useRef();
    // const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(false)
    const {H2, Form, Input, Terms, Submit, Error} = Styles.Authintication;


    // async function handleLogout(){
    //     e.preventDefault();
    //     setError('')
    //     try {
    //         await logout()
    //     } catch (err) {
    //         setError(`Failed to logout: ${err}`)
    //     }
    // }

//    function handleUpdate(e){
//         e.preventDefault();
//         setLoading(true);
//         setError('')
//         if(passwordRef.current.value !== passwordConfirmRef.current.value){
//             return setError("Passwords don't match. Please try again");
//         }
//         const promises = [];
//         setLoading('')
//         setError('')
//         if(emailRef.current.value !== currentUser.email){
//             promises.push(updateEmail(emailRef.current.value))
//         }

//         if(passwordRef.current.value !== currentUser.password){
//             promises.push(updatePassword(passwordRef.current.value))
//         }
//         // remember to link back to login page
//         Promise.all(promises).then(()=>console.log(props)).catch(err=>setError('Failed to update account!')).finally(()=>setLoading(false))
//     }

    writeUserData = () => {
        Firebase.database().ref('/').set({name:'Yann', Groceries:['banana, milk, apples']});
      }

    return (
        <div>
            {error && <Error>${error}</Error>}
            {currentUser && currentUser.email}
            {/* <button onClick={handleLogout}>Logout</button> */}
            <button onClick={writeUserData}>Try me</button>
        </div>
    )
}
