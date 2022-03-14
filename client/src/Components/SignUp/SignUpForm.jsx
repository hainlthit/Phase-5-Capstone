import React, { useState } from "react";
import { Container, Form, Button, Alert } from 'react-bootstrap'

function SignUpForm({onLogin}){
    
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email,
                username,
                password
            })
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    return (
        <Container>
            <h1>Sign Up Form</h1>
            <Form onSubmit={handleSubmit}>
          
                <Form.Group className="mb-3">
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        id="email" 
                        type="email" 
                        placeholder="Enter email" 
                        autoComplete="off"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        id="username" 
                        type="text" 
                        placeholder="Enter username" 
                        autoComplete="off"
                        value = {username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        id="password" 
                        type="password" 
                        placeholder="Password" 
                        autoComplete="current-password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Login"}</Button>
                {errors.map(error => (
                    <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
                ))}
            </Form>
        </Container>
    )
}

export default SignUpForm