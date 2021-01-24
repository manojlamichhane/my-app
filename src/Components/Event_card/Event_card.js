import React from 'react';
import Title from '../widgets/typography/Title';
import Eventtime from '../widgets/typography/Eventtime';
import Eventlocation from '../widgets/typography/Eventlocation';
import Eventmail from '../widgets/typography/Eventmail';
import './Event_card.css'

function Event_card(props) {
    return (   
            <div className="service">
            <img className ="images" src={props.image}></img>  
            <Title color="#000000">{props.title}</Title>
            <Eventtime color="black"/>
            <Eventlocation/>
            <Eventmail  color="black"/>
            <p>{props.description}</p>
            </div>
        
    );
}

export default Event_card;