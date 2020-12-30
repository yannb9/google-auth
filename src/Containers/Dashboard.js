import React, {useState} from 'react'
import { Styles } from '../StyledComp'
import { useAuth } from '../Contexts/AuthContext';
import fbase from '../firebase'

export default function Dashboard() {
    const { currentUser } = useAuth();
    const [error, setError] = useState('');
    const { Error} = Styles.Authintication;
    
    function handleDB(){
        setError('')
        try {
            var object = {name:'yann', complete: true}
            fbase.database().ref('ToDo').push(object)
            console.log(object)
        } catch (err) {
            setError(`Failed to logout: ${err}`)
        }
    }

    function fetchDB(){
        fbase.database().ref('ToDo').on('value', item=>console.log(item.val()))
    }

    // async function handleLogout(e){
    //         e.preventDefault();
    //         setError('');
    //         try {
    //             await logout()
    //         } catch (error) {
    //             setError(`Failed to logout: ${error}`)
    //         }
    // }

    return (
        <div>
            {error && <Error>${error}</Error>}
            {currentUser && currentUser.email}
            <button onClick={handleDB}>Add to DB</button>
            <button onClick={fetchDB}>Fetch DB</button>
            {/* <button onClick={writeUserData}>Try me</button> */}
        </div>
    )
}
