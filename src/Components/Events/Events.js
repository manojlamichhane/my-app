import React from 'react';
import Event_card from '../Event_card/Event_card';
import './Events.css'

function Events(props) {
    return (
        <div>
            <h2 style={{textAlign:'center'}}>OUR EVENTS</h2>

        <div className="Events">
        <Event_card
            image="https://i.pinimg.com/originals/df/07/cb/df07cb4ccb697303462ad7a8b57b852f.jpg"
            title="Morning Gathering"
            description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        <Event_card
            image="https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Spirit And Truth"
            description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        <Event_card
            image="https://i.pinimg.com/originals/c8/2a/f9/c82af9c8a818d8dba545fb896b8a6b2c.jpg"
            title="Sunday School"
            description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>            
        
        </div>
        </div>
    );
}

export default Events;