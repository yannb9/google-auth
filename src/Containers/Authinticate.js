import React, { useState } from 'react';
import {Styles} from '../StyledComp'
import Signin from '../Components/Signin'
import Signup from '../Components/Signup'
import { ReactComponent as LoginImg } from '../svg/dev.svg';

export default function Authinticate() {
    const [signIn, setSignin] = useState(false)
    const {Auth, Left, Right, Text} = Styles.Authintication;
    return (
        <Auth className="Auth">
        <Left className="Left"><LoginImg /></Left>
        <Right className="Right">
            <Signup />
            <Text>Already a member?<button>Sign In</button></Text>
            {/* {signIn ? 
            <>
                <Signin /> 
                <Text>Not a member?<button onClick={setSignin(!signIn)}>Sign Up</button></Text>
            </> : 
            <>
                <Signup />
                <Text>Already a member?<button onClick={setSignin(!signIn)}>Sign In</button></Text>
            </>
            } */}
        </Right>
    </Auth>
    )
}
