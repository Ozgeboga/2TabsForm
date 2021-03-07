import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import { Form, Button, Col, InputGroup } from "react-bootstrap"

function Login() {
    const [validated, setValidated] = useState(false);
    const[password, setPassword]= useState("");

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false ) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    const passwordControl = useRef()

    function handleClick() {
        const password = passwordControl.current
        console.log(password)
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }

    function IsEmpty(){
        if(password.length === 0){
            return <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz!</Form.Control.Feedback>
        }
        return <Form.Control.Feedback></Form.Control.Feedback>
    }


    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row className="mt-3">
                <Form.Group

                    as={Col}
                    controlId="formBasicEmail1">
                    <Form.Control
                        className="form_control"
                        required
                        pattern=".+@.+"
                        type="email"
                        placeholder="E-posta adresi"
                        title=""
                    />
                   <Form.Control.Feedback>İyi!</Form.Control.Feedback>
                     <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz! Lütfen @ eklediğinizden emin olun!</Form.Control.Feedback>  
                </Form.Group>
            </Form.Row>
            <Form.Row >
                <Form.Group
                    as={Col} >
                    <InputGroup>
                        <Form.Control
                            required
                            className="form_control"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="En az bir sayı , bir büyük harf , bir küçük harf ve toplam en az 8 karakter içermelidir."
                            ref={passwordControl}
                            type="password"
                            placeholder="Şifre"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <i className="fas fa-eye" onClick={handleClick}></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control.Feedback></Form.Control.Feedback>
                        < IsEmpty />
                        {/* <Form.Check type="checkbox" onClick={handleClick} label="Şifremi Göster" /> */}
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <Button
                className=" btn btn-color col"
                type="submit">
                Giriş Yap
                 </Button>
            <a href="#" className="sifre">Şifremi unuttum</a>
        </Form>
    );
}



export default Login;