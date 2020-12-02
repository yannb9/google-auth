import React,{Component} from 'react';
import {Styles} from '../StyledComp'
import Signin from '../Components/Signin'
import Register from '../Components/Register'
import { ReactComponent as LoginImg } from '../svg/dev.svg';

export default class Auth extends Component {
    state = {
        isLoggedIn:false
     }

     updateAuth = () =>{
         this.setState({
            isLoggedIn: !this.state.isLoggedIn
         })
     }

    render() { 
        const {Auth, Left, Right, Text} = Styles.Authintication;
        return (  
            <Auth className="Auth">
                <Left className="Left"><LoginImg /></Left>
                <Right className="Right">
                    {this.state.isLoggedIn ? 
                    <>
                        <Signin /> 
                        <Text>Not a member?<button onClick={this.updateAuth}>Sign Up</button></Text>
                    </> : 
                    <>
                        <Register />
                        <Text>Already a member?<button onClick={this.updateAuth}>Sign In</button></Text>
                    </>
                    }
                </Right>
            </Auth>
        );
    }
}