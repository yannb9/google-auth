import React,{Component} from 'react';
import {Styles} from '../StyledComp'
import Login from '../Components/Login'
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
                        <Login /> 
                        <Text>Not a member?<a href='/#' onClick={this.updateAuth}>Sign Up</a></Text>
                    </> : 
                    <>
                        <Register />
                        <Text>Already a member?<a href='/#' onClick={this.updateAuth}>Sign In</a></Text>
                    </>
                    }
                </Right>
            </Auth>
        );
    }
}