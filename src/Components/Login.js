import React, {useRef, useState} from 'react'
import { Styles } from '../StyledComp'
import { useAuth } from '../Contexts/AuthContext'
import {GoogleButton} from '../Components/GoogleButton'

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(false)
    const { login } = useAuth()
    const {H2, Form, Input, Submit, Error} = Styles.Authintication;

    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch (error) {
            return setError('Failed to Login')
        }

        setLoading(false)
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <H2>Login</H2>
            {error && <Error animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{error}</Error>}
            <GoogleButton />

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

            <Submit
                disabled={loading}
                whileHover={{
                    backgroundColor:'#7983f9',
                    translateY: -3,
                }}
            >Login</Submit>
        </Form>
    )
}