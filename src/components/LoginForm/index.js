import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LoginFormPage from './loginFormPage';
import { LoginFormContainer } from './style';
const LoginForm = () => {
    return (
        <LoginFormContainer>
            <Container className="login-page">
            <Row className="login-row">
                <Col md="12">
                   <LoginFormPage />
                </Col>
            </Row> 
            </Container>       
        </LoginFormContainer>
    )
};

export default LoginForm;