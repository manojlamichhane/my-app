import React from 'react';
import Service_card from '../Service_card/Service_card';

import './Services.css'

function Services(props) {
    return (
        <div className="Header">
            <h1>STATEMENT OF FAITH</h1>
        <div className="service-container">
            
            <Service_card 
            logo="https://png.pngtree.com/png-clipart/20190629/original/pngtree-autumn-red-leaf-element-png-image_4086075.jpg" 
            title="What we believe" 
            description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>

            <Service_card 
            logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwCmF2KoXOJJaFOIieryer7TuoAQIHyWnxA&usqp=CAU" 
            title="Who we are" 
            description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>

<           Service_card 
            logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJxOTWuTmi6Kdl_NNWCqbREFpROTbtu-Q9g&usqp=CAU" 
            title="How we live" 
            description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>            
            
        </div>
        </div>
    );
}

export default Services;