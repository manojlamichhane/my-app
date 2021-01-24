import React from 'react';
import Heading from '../widgets/typography/Heading'
import Title from '../widgets/typography/Title'
import Button from '../widgets/Button'
import './Header.css'

function Header(props) {
    return (
      <div className="header">   
      <Heading>SIMPLE CSS TEMPLATE</Heading>
      <Title>WELCOME TO OUR CHURCH</Title>
      <Button name="Join with us"/>
      </div>
    );
}

export default Header;