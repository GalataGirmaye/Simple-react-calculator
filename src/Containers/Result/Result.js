import React from 'react'

import './Result.css'

function Result(props) {
    return (
        <div className="Result-Container">
           <div className="result">
                <div className="Operator-div">{props.operator}</div>
               {props.computedValue}
            </div>
           <div className="input-place">
               {props.value !==null?(props.value): 
                props.computedValue? 
               (props.computedValue):0}
           </div>
        </div>
    )
}

export default Result
