import React from 'react';
import Time from '../Time/Time';
import Title from '../widgets/typography/Title';
import Eventtime from '../widgets/typography/Eventtime';
import Eventlocation from '../widgets/typography/Eventlocation';
import Eventmail from '../widgets/typography/Eventmail'
import './Next.css'


function Next(props) {
    return (
        <div className="Name">
            <div className="next1">                
            <Title color="black">WELCOME TO OUR CHURCH</Title>
            <Eventtime color="black"/>
            <Eventlocation/>
            <Eventmail  color="black"/>   
            </div>
            <div className="next2">
            <Time number="200" unit="Days"/>
            <Time number="16" unit="Hours"/>
            <Time number="42" unit="Minutes"/>
            <Time number="40" unit="Seconds"/>
            </div>
        </div>
    );
}

export default Next;