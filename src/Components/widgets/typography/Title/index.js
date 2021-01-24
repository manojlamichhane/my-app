import React from 'react';
import './title.css'

const Title = (props) => {

    return (
        <div className="title">
            <h3 style={{color:props.color}}>{props.children}</h3>
        </div>
    );
}

export default Title;