import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Col, InputGroup } from "react-bootstrap"
import IsEmpty from "./IsEmpty"


function Signup() {
    const [validated, setValidated] = useState(false);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setconfirmedPassword] = useState('');
    const [formCheck, setFormCheck] = useState(false);
    const [isMatched, setIsMatched] = useState("");

    const passwordControl = useRef("")
    const confirmedPasswordControl = useRef("")
    const firstnameControl = useRef("")
    const surnameControl = useRef("")

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (password !== confirmedPassword) {
            setIsMatched("Şifreler uyuşmamaktadır!")
        } else {
            setIsMatched("")
        }

    };

    function handleClick() {
        const password = passwordControl.current
        console.log(password.value)
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }
    function showPassword() {
        const confirmedPassword = confirmedPasswordControl.current
        if (confirmedPassword.type === "password") {
            confirmedPassword.type = "text";
        } else {
            confirmedPassword.type = "password";
        }
    }

    function SubmitButton() {
        let isValid = false;
        if (firstname && lastname && email
            && password && confirmedPassword
            && formCheck && password && confirmedPassword) {
            isValid = true
        }
        return <Button className="btn-color col mb-2" type="submit" disabled={!isValid}>Üye Ol</Button>
    }
    
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <p className="text-muted mt-1">E-posta adresinle kayıt ol</p>
            <Form.Row className="mt-2">
                <Form.Group as={Col} >
                    <Form.Control
                        required
                        className="form_control"
                        pattern="^[a-zA-Z0-9şŞıİçÇöÖüÜĞğ]{3,24}$"
                        type="text"
                        placeholder="Ad"
                        title="Bu alan en az 3 en fazla 24 karakter içermelidir , özel karakterler kullanılamaz."
                        ref={firstnameControl}
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    < IsEmpty firstname={firstname} />
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Control
                        required
                        pattern="^[a-zA-Z0-9şŞıİçÇöÖüÜĞğ]{3,24}$"
                        className="form_control"
                        type="text"
                        title="Bu alan en az 3 en fazla 24 karakter içermelidir,  özel karakterler kullanılamaz."
                        placeholder="Soyad"
                        ref={surnameControl}
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    < IsEmpty lastname={lastname} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group controlId="formBasicEmail" as={Col}>
                    <Form.Control
                        required
                        className="form_control"
                        type="email"
                        pattern=".+@.+"
                        placeholder="E-posta adresi"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz! Lütfen @ eklediğinizden emin olun!</Form.Control.Feedback>
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
                            onChange={e => setPassword(e.target.value)}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <i className="fas fa-eye" onClick={handleClick}></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">Bu alan boş bırakılamaz!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group
                    controlId="formBasicPassword2"
                    as={Col}>
                    <InputGroup >
                        <Form.Control
                            required
                            className="form_control"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="En az bir sayı , bir büyük harf , bir küçük harf ve toplam en az 8 karakter içermelidir."
                            type="password"
                            placeholder="Şifre Onayı"
                            ref={confirmedPasswordControl}
                            value={confirmedPassword}
                            onChange={e => setconfirmedPassword(e.target.value)}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <i className="fas fa-eye" onClick={showPassword}></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <p className="isMatched">{isMatched}</p>
            <Form.Group>
                <Form.Check
                    required
                    onChange={(e) => {
                        setFormCheck(!formCheck)}
                    }
                    label="Önemli kampanyalardan haberdar olmak için Rıza Metni kapsamında elektronik ileti almak istiyorum."
                />
            </Form.Group>
            <SubmitButton
            />
        </Form>
    );
}



export default Signup;