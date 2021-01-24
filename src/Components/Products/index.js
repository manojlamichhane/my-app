import React from 'react';

import Outlinebutton from '../widgets/Outlinebutton/Outlinebutton';
import Title from '../widgets/typography/Title';
import './Products.css'
import EventIcon from '@material-ui/icons/Event';

function Products(props) {
    return (
        <div className="product">
            <div>
            <div className="abc">
            <EventIcon/>
            <p><small>Monday,10:00 AM - Friday,10:00 AM</small></p>
            </div>
            <Title>WELCOME TO OUR CHURCH</Title>
            </div> 
            <div>
            <p style={{color:"white"}}>St. Paul Church</p>
            <p style={{color:"white"}}>510 102th Ave, NE, Belleveu, WA 68005</p>    
            </div>
            <Outlinebutton name="Read More"/>
            
        </div>
    );
}

export default Products;