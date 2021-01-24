import React from 'react';
import './Subtitle.css'

const Subtitle = (props) => {

    return (
        <div className="subtitle">
            <h5>{props.children}</h5>
        </div>
    );
}

export default Subtitle;