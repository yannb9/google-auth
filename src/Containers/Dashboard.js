import React, {useState} from 'react'
import { Styles } from '../StyledComp'
import { useAuth } from '../Contexts/AuthContext';
import fbase from '../firebase'

export default function Dashboard() {
    const { currentUser, addToFirebaseDB, logout } = useAuth();
    const [error, setError] = useState('');
    const { Error} = Styles.Authintication;
    
    function handleDB(){
        setError('')
        try {
            var object = {
                users:[currentUser.email],
                groceries:{
                    product:'Waffles',
                    quantity: 5,
                    brand:'Eggo',
                }
            }
            addToFirebaseDB(object)
        } catch (err) {
            setError(`Failed to logout: ${err}`)
        }
    }

    function fetchDB(){
        fbase.database().ref('GRObject').on('value', item=>console.log(item.val()))
    }

    async function handleLogout(e){
            e.preventDefault();
            setError('');
            try {
                await logout()
            } catch (error) {
                setError(`Failed to logout: ${error}`)
            }
    }

    return (
        <div>
            {error && <Error>${error}</Error>}
            {currentUser && currentUser.email}
            <button onClick={handleDB}>Add to DB</button>
            <button onClick={fetchDB}>Fetch DB</button>
            <button onClick={handleLogout}>handleLogout</button>
            {/* <button onClick={writeUserData}>Try me</button> */}
        </div>
    )
}
