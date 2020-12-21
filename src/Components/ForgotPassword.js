import React, {useRef, useState} from 'react'
import { Styles } from '../StyledComp'
import { useAuth } from '../Contexts/AuthContext'
import {GoogleButton} from '../Components/GoogleButton'
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('')
    const [loading,setLoading] = useState(false)
    const { resetPassword } = useAuth()
    const {H2, Form, Input, Submit, Error} = Styles.Authintication;

    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Password reset email sent. Please check your inbox')
        } catch (error) {
            return setError('Failed to Reset Password')
        }

        setLoading(false)
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <H2>Reset Password</H2>
            {error && <Error animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{error}</Error>}
            <Input
                type="email"
                name="email"
                placeholder="Email"
                ref={emailRef}
                required
            />

            <Submit
                disabled={loading}
                whileHover={{
                    backgroundColor:'#7983f9',
                    translateY: -3,
                }}
            >Send Reset Password</Submit>
        </Form>
    )
}