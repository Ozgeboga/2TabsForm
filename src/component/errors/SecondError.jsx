import React from 'react';
import {Form} from "react-bootstrap"
function SecondError() {
    return(
        <Form.Control.Feedback type="invalid">
            Özel karakterler kullanılamaz!
            </Form.Control.Feedback>
    )
}

export default SecondError