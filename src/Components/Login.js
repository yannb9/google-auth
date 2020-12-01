import React,{Component} from 'react';
import {Styles} from '../StyledComp'
import {GoogleButton} from '../Components/GoogleButton'

export default class Login extends Component {
    state = { 
        name:'',
        email: '',
        password:''
        
     }

     handleChange = (ev) =>{
         this.setState({
             [ev.target.name]: ev.target.value
            })
     }

    render() { 
        const {Form, H2, Input, Terms, Submit} = Styles.Authintication;
        return (  
            <Form>
                <H2>Login</H2>
                <GoogleButton />
                <Input
                    type="text" 
                    name="name"
                    placeholder="Full Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <Submit
                    whileHover={{
                        backgroundColor:'#7983f9',
                        translateY: -3,
                    }}
                >Sign In</Submit>
            </Form>
        );
    }
}