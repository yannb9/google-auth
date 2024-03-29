import React, {useRef, useState} from 'react'
import { Styles } from '../StyledComp'
import { useAuth } from '../Contexts/AuthContext'
import {GoogleButton} from '../Components/GoogleButton'

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(false)
    const { signup } = useAuth()
    const {H2, Form, Input, Terms, Submit, Error} = Styles.Authintication;

    async function handleSubmit(ev) {
        ev.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch (error) {
            return setError(error)
        }

        setLoading(false)
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <H2>Signup</H2>
            {error && <Error animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{error}</Error>}
            <GoogleButton />
            <Input
                type="text" 
                name="name"
                placeholder="Full Name"
                ref={nameRef}
                required
            />

            <Input
                type="email"
                name="email"
                placeholder="Email"
                ref={emailRef}
                required
            />

            <Input
                type="password"
                name="password"
                placeholder="Password"
                ref={passwordRef}
                required
            />

            <Input
                type="password"
                name="confirmed"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
                required
            />
            <Terms>You are agreeing to the <a href="/#">Terms of Service</a> and <a href="/#">Privacy Policy</a></Terms>
            <Submit
                disabled={loading}
                whileHover={{
                    backgroundColor:'#7983f9',
                    translateY: -3,
                }}
            >Register</Submit>
        </Form>
    )
}