import React, { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import {Styles} from '../StyledComp';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Dashboard from '../Containers/Dashboard';
import { ReactComponent as LoginImg } from '../svg/dev.svg';

export default function Authinticate() {
    const [loginPage, setLoginPage] = useState(true)
    const { currentUser } = useAuth();
    const {Auth, Left, Right, Text} = Styles.Authintication;
    return (
        <>
            {currentUser ? 
            (<Dashboard />)
            :
            (
                <Auth className="Auth">
                <Left className="Left"><LoginImg /></Left>
                <Right className="Right">
                    {loginPage ? 
                    (
                        <>
                            <Login className="Login"/> 
                            <Text>Not a member?<button onClick={()=>setLoginPage(!loginPage)}>Sign Up</button></Text>
                        </>
                    ) 
                    : 
                    (
                        <>
                            <Signup className="Signup"/>
                            <Text>Not a member?<button onClick={()=>setLoginPage(!loginPage)}>Sign Up</button></Text>
                        </>
                    )}
                </Right>
            </Auth>
            )}
        </>

    )
}
 