import React from 'react';
import Title from '../widgets/typography/Title';
import './Service_card.css'

function Service_card(props) {
    return (   
            <div className="service">
            <img className="logo" src={props.logo}></img>      
            <Title color="#000000">{props.title}</Title>
            <p>{props.description}</p>
            </div>
        
    );
}

export default Service_card;