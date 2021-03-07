import React from 'react';
import {Form} from "react-bootstrap"
function Error() {
    return(
        <Form.Control.Feedback type="invalid">
            Bu alan boş bırakılamaz en az 3 karakter!
            </Form.Control.Feedback>
    )
}

export default Error