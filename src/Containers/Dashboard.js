import React, {useState} from 'react'
import { Styles } from '../StyledComp'
import { useAuth } from '../Contexts/AuthContext';

export default function Dashboard() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth();
    const {Error} = Styles.Authintication;

    async function handleLogout(){
        setError('')
        try {
            await logout()
        } catch (err) {
            setError(`Failed to logout: ${err}`)
        }
    }
    return (
        <div>
            {error && <Error>${error}</Error>}
            {currentUser && currentUser.email}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
