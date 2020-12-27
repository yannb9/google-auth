import React, { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import {Styles} from '../StyledComp';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import ForgotPassword from '../Components/ForgotPassword'
import Dashboard from '../Containers/Dashboard';
import { ReactComponent as LoginImg } from '../svg/dev.svg';

export default function Authinticate() {
    // const [loginPage, setLoginPage] = useState(true)
    const [loginPage, setLoginPage] = useState(1)
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
                    {loginPage === 1 ? 
                    (
                        <>
                            <Login className="Login"/> 
                            <Text>Forgot your password?<button onClick={()=>setLoginPage(3)}>Reset Password</button></Text>
                            <Text>Not a member?<button onClick={()=>setLoginPage(2)}>Sign Up</button></Text>
                        </>
                    ) 
                    : loginPage === 2 ?
                    (
                        <>
                            <Signup className="Signup"/>
                            <Text>Not a member?<button onClick={()=>setLoginPage(1)}>Sign In</button></Text>
                        </>
                    )
                    : 
                    (
                        <>
                            <ForgotPassword className="Forgot_Password"/>
                            <Text><button onClick={()=>setLoginPage(1)}>Sign In</button></Text>
                        </>
                    )
                    }
                </Right>
            </Auth>
            )}
        </>

    )
}
 