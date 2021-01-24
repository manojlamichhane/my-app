import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import './Eventmail.css'

function index(props) {
    return (
        <div className="eventmail">
            <MailIcon/>
            <p style={{color:props.color}}><small>510 102th Ave, NE, Believe, WA 68005</small></p>
        </div>
    );
}

export default index;            