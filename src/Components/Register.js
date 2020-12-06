import React,{Component} from 'react';
import {Styles} from '../StyledComp'
import {GoogleButton} from '../Components/GoogleButton'
import fireauth from "../firebase"

export default class Register extends Component {
    state = { 
        name:'',
        email: '',
        password:'',
        confirmed:'',
        error:''
        
     }

    //  registerUser(email, password){
    //      return new Promise((res, rej)=>{
    //          res(fireauth.auth().createUserWithEmailAndPassword(email, password))
    //      })
    //  }

     handleChange = (ev) =>{
         this.setState({
             [ev.target.name]: ev.target.value
            })
     }

     handleSubmit = (ev) =>{
         ev.preventDefault();
         if(this.state.password === this.state.confirmed){
             fireauth.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(user=>console.log(user));
            //  try {
            //  } catch (error) {
            //      throw error;
            //  }
             
         } else{
             throw {err:'Please make sure your Password and Confirm Password are the same'}
         }
    }

    handleSubmit(ev){
        ev.preventDefault();
        console.log(ev)
    }

    render() { 
        const {Right, Form, H2, Input, Terms, Submit} = Styles.Authintication;
        return (  
                <Right className="Right">
                    <Form onSubmit={this.handleSubmit}>
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
                            name="confirmed"
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