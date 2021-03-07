import React from "react"
import Error from "./errors/Error"
import SecondError from "./errors/SecondError"

function IsEmpty(props) {
    console.log(Object.values(props))
        if (Object.values(props)[0].length < 3 ) {
            
                    return <Error />
               }
               return <SecondError />
    
}

export default IsEmpty