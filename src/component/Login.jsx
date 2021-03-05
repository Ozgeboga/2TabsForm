import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  "./styles.css"
import { Form, Button, Col} from "react-bootstrap"

function Login() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
     const passwordControl = useRef()

    function handleClick(){
            const password = passwordControl.current
            console.log(password)
            if (password.type === "password") {
                password.type = "text";
              } else {
                password.type = "password";
              }
    }

    
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row className="mt-3">
                <Form.Group
                
                    as={Col} 
                    controlId="formBasicEmail">
                    <Form.Control
                        required
                        type="email"
                        placeholder="E-posta adresi"
                    />
                    {/* <Form.Control.Feedback>Good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz!</Form.Control.Feedback>  */}
                </Form.Group>

            </Form.Row>
            <Form.Row   >

                <Form.Group 
                    
                    as={Col} >
                    <Form.Control
                        required
                        ref={passwordControl}
                        type="password"
                        minLength="3"
                        maxLength="23"
                        placeholder="Şifre"
                        
                    /> 
                    <Form.Control.Feedback>Good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz!</Form.Control.Feedback>
                    <Form.Check type="checkbox" onClick={handleClick} label="Şifremi Göster" />
                </Form.Group>

            </Form.Row>
           
            <Button 
            className="btn-color col"
            
             type="submit">
                Giriş Yap
                 
                 </Button>
                 <a href="#" className="sifre">Şifremi unuttum</a>
        </Form>
    );
}



export default Login;