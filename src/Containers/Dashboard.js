import React from 'react'
import { useAuth } from '../Contexts/AuthContext';

export default function Dashboard() {
    function handleLogout(){
        
    }
    const { currentUser } = useAuth();
    return (
        <div>
            {currentUser && currentUser.email}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
