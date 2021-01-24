import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Eventlocation.css'

function index(props) {
    return (
        <div className="eventlocation">
            <LocationOnIcon/>
            <p><small>St. Paul Church</small></p>
        </div>
    );
}

export default index;

