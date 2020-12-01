import React,{Component} from 'react';
import {Styles} from '../StyledComp'
import {GoogleButton} from '../Components/GoogleButton'

export default class Register extends Component {
    state = { 
        name:'',
        email: '',
        password:'',
        confirmed:''
        
     }

     handleChange = (ev) =>{
         this.setState({
             [ev.target.name]: ev.target.value
            })
     }

    render() { 
        const {Right, Form, H2, Input, Terms, Submit, Text} = Styles.Authintication;
        return (  
                <Right className="Right">
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

                        <Input
                            type="password"
                            name="confirm"
                            placeholder="Confirm Password"
                            value={this.state.confirmed}
                            onChange={this.handleChange}
                        />
                        <Terms>You are agreeing to the <a href="/#">Terms of Service</a> and <a href="/#">Privacy Policy</a></Terms>
                        <Submit
                            whileHover={{
                                backgroundColor:'#7983f9',
                                translateY: -3,
                            }}
                        >Register</Submit>
                    </Form>
                </Right>
        );
    }
}