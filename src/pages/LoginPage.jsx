
// generamos la pagina para el login

import React from 'react'
import LoginComponent from '../components/login/LoginComponent'
import { Container } from 'react-bootstrap'

const LoginPage = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <LoginComponent />
        </Container>
    )
}


export default LoginPage