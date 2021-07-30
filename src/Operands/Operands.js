import React from 'react'

import './Operands.css'

function Operands(props) {
    return (
            <button className="Operand" onClick={props.takeInput}>{props.value}</button>
    )
}

export default Operands
