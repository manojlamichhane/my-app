import React from 'react';
import EventIcon from '@material-ui/icons/Event';
import './Eventime.css'

function index(props) {
    return (
        <div className="eventtime">
            <EventIcon/>
            <p style={{color:props.color}}><small>Monday,10:00 AM - Friday,10:00 AM</small></p>
        </div>
    );
}

export default index;            