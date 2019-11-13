import React, { Button } from 'react';
import Styled from "styled-components"; 
import { FaEnvelope } from "react-icons/fa";

const TheCard = Styled.ul`
  
    list-style-type: none; 
    border: solid 1px gray; 
    border-radius: 8px; 
    padding: 8px;
    max-width: 320px; 
    background-color: #ddddea; 
   
`;

const ListItem = Styled.li `
    display:flex;
    justify-content: center;
    align-items: center; 
    padding: 6px; 
`


const Card = ({ user }) => {
    return (
        <TheCard>  
              
            <ListItem>Hi, My name is {user.name.first} {user.name.last} 
    
            </ListItem>
            <ListItem data-title="My email is" data-value="{user.email}">
                <FaEnvelope /> {user.email}
            </ListItem>
            <ListItem>
                {user.cell}
            </ListItem>
            <ListItem>
                {user.location.city}, {user.location.country}
            </ListItem>
        </TheCard>
    );
}

export default Card; 