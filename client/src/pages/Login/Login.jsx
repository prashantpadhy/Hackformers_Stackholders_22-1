import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link , useNavigate } from 'react-router-dom';
// import './Login.css'

function Login() {
    const [user , setUser] = useState({email : ""  , password : ""})
    const Navigate = useNavigate()

    const onChange = (e)=>{
        e.preventDefault()
        setUser({ ...user, [e.target.name]: e.target.value })

    }


    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const userData = await fetch('http://localhost:8080/api/auth/login', {
                method : "POST",
                headers : { 
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin' : 'http://localhost:3000',
                },
                body : JSON.stringify({'email': user.email, 'password': user.password })
            })
            const json = await userData.json()
            if(json.success){
                localStorage.setItem("token" ,json.token)
                Navigate('/')
            }

        }
        catch(err){
            console.log(err)
            // Navigate('/signup')

        }

    }
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                                        Logo
                                    </h2>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" name='email' onChange={onChange} required="True"/>
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" name='password' onChange={onChange} required="True"/>
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            ></Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Sign in
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Dont have an account??{' '}
                                                <Link to="/signup" className="text-primary fw-bold">
                                                    Sign Up
                                                </Link>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
