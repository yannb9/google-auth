import React, {useRef} from 'react'
import { Styles } from '../StyledComp'
import {GoogleButton} from '../Components/GoogleButton'

export default function SignUp() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {H2, Form, Input, Terms, Submit} = Styles.Authintication;


    return (
        <Form>
            <H2>Login</H2>
            <GoogleButton />
            <Input
                type="text" 
                name="name"
                placeholder="Full Name"
                ref={nameRef}
                // value={this.state.name}
                // onChange={this.handleChange}
                required
            />

            <Input
                type="email"
                name="email"
                placeholder="Email"
                ref={emailRef}
                // value={this.state.email}
                // onChange={this.handleChange}
                required
            />

            <Input
                type="password"
                name="password"
                placeholder="Password"
                ref={passwordRef}
                // value={this.state.password}
                // onChange={this.handleChange}
                required
            />

            <Input
                type="password"
                name="confirmed"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
                // value={this.state.confirmed}
                // onChange={this.handleChange}
                required
            />
            <Terms>You are agreeing to the <a href="/#">Terms of Service</a> and <a href="/#">Privacy Policy</a></Terms>
            <Submit
                whileHover={{
                    backgroundColor:'#7983f9',
                    translateY: -3,
                }}
            >Register</Submit>
        </Form>
    )
}
