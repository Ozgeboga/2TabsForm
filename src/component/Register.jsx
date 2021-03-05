import React, { useState, useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Col, InputGroup } from "react-bootstrap"

function Register() {
    const [validated, setValidated] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setconfirmedPassword] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        
    };
    
    function SubmitButton (){
        if (firstname && lastname && email && password && confirmedPassword && password === confirmedPassword){
            return <Button className="btn-color col" type="button">Button</Button>
          } else {
            return <Button className="btn-color col" type="button" disabled>Button</Button>
          };

         
    }
    

    return (
        
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <p className="text-muted mt-1">E-posta adresinle kayıt ol</p>
            <Form.Row className="mt-2">
                <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ad"
                        value={firstname}
                        onChange={ e => setFirstname(e.target.value)}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Soyad"
                        value={lastname} 
                        onChange={ e => setLastname(e.target.value)}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz!</Form.Control.Feedback>
                </Form.Group>

            </Form.Row>
            <Form.Row>
                <Form.Group controlId="formBasicEmail" as={Col}>

                    <Form.Control
                        required
                        type="email"
                        placeholder="E-posta adresi"
                        value={email} 
                        onChange={ e => setEmail(e.target.value)}
                         />
                    <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz!</Form.Control.Feedback>
                </Form.Group>

            </Form.Row>

            <Form.Row>

                <Form.Group
                    controlId="formBasicPassword"
                    as={Col}>
                    <InputGroup >
                        <Form.Control
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            required
                            type="password"
                            placeholder="Şifre"
                            value={password}
                            onChange={ e => setPassword(e.target.value)}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <i class="fas fa-eye"></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz!</Form.Control.Feedback>
                </Form.Group>

            </Form.Row>
            <Form.Row>

                <Form.Group
                    controlId="formBasicPassword"
                    as={Col}>
                    <InputGroup >
                        <Form.Control
                            required
                            type="password"
                            placeholder="Şifre Onayı"
                            value={confirmedPassword}
                            onChange={ e => setconfirmedPassword(e.target.value)}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <i class="fas fa-eye"></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz!</Form.Control.Feedback>
                </Form.Group>

            </Form.Row>
            <Form.Group>
                <Form.Check
                    required
                    label="Önemli kampanyalardan haberdar olmak için Rıza Metni kapsamında elektronik ileti almak istiyorum."
                />
            </Form.Group>
            <SubmitButton/>
            
        </Form>
    );
}



export default Register;