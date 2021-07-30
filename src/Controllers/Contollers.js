import React from 'react'

import './Controller.css'
import History from '../assets/images/History.png'
function Contollers(props) {
    return (
        <div className="Controllers">
        <button className="history-Controller"><img src={History}></img></button>
        <button onClick={props.aced} className="ac-Controller">AC</button>
        <button onClick={props.deleted} className="delete-Controller">DEL</button>
        </div>
    )
}

export default Contollers
