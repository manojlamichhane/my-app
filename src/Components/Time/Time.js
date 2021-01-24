import React from 'react';
import './Time.css'

function Time(props) {
    return (
        <div className="time">
            <h3>{props.number}</h3>
            <p><small>{props.unit}</small></p>
        </div>
    );
}

export default Time;