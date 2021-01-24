import React from 'react';
import './Outlinebutton.css'

function Outlinebutton(props) {
    return (
        <div >
            <button className="obtn">{props.name}</button>
        </div>
    );
}

export default Outlinebutton;