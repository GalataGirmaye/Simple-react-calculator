import React from 'react'

import './Operators.css'
function Operators(props) {
    return (

            <button className="Operator" onClick={props.clicked}>{props.value}</button>
       
    )
}

export default Operators
