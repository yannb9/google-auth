import React from 'react'
import { ReactComponent as LoginImg } from '../svg/dev.svg';

export default function SignUp() {
    const {Auth, Left, Right, Text} = Styles.Authintication;
    return (
        <>
            <Auth className="Auth">
                <Left className="Left"><LoginImg /></Left>
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
            </Auth>
        </>
    )
}
