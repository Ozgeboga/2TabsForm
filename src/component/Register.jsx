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
    const [formCheck, setFormCheck] = useState('');

    const passwordControl = useRef()

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        
    };

    function handleClick() {
        const password = passwordControl.current
        
        console.log(password)
        if (password.type === "password" ) {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }
    
    function SubmitButton (){
        if (firstname && lastname && email && password && confirmedPassword && formCheck && password === confirmedPassword){
            return <Button className="btn-color col mb-2" type="submit">Button</Button>
          } else {
            return <Button className="btn-color col mb-2" type="submit" disabled>Button</Button>
          };

         
    }


    return (
        
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <p className="text-muted mt-1">E-posta adresinle kayıt ol</p>
            <Form.Row className="mt-2">
                <Form.Group as={Col} >
                    <Form.Control
                        required
                        className="form_control"
                        type="text"
                        placeholder="Ad"
                        title="Bu alan en az 3 en fazla 24 karakter içermelidir."
                        minLength="3"
                        maxLength="24"
                        value={firstname}
                        onChange={ e => setFirstname(e.target.value)}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Control
                        required
                        className="form_control"
                        type="text"
                        title="Bu alan en az 3 en fazla 24 karakter içermelidir."
                        placeholder="Soyad"
                        minLength="3"
                        maxLength="24"
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
                        className="form_control"
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
                            className="form_control"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="En az bir sayı , bir büyük harf , bir küçük harf ve toplam en az 8 karakter içermelidir."
                            required
                            ref={passwordControl}
                            type="password"
                            placeholder="Şifre"
                            value={password}
                            onChange={ e => setPassword(e.target.value)}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <i class="fas fa-eye" onClick={handleClick}></i>
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
                            className="form_control"
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
                    value={true}
                    onChange={(e) => setFormCheck(e.target.value)}
                    label="Önemli kampanyalardan haberdar olmak için Rıza Metni kapsamında elektronik ileti almak istiyorum."
                />
            </Form.Group>
            <SubmitButton
            
            />
            
        </Form>
    );
}



export default Register;