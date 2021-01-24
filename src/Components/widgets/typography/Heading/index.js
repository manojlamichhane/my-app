import React from 'react';
import './Heading.css'

function Heading(props) {
    return (
        <div className="Heading">
            <h1 style={{color:props.color}}>{props.children}</h1>
        </div>
    );
}

export default Heading;