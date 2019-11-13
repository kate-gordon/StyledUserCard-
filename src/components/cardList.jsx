import React, { Component } from "react"; 
import Styled from "styled-components"; 
import { loadData } from "../utils/loadData"; 
import Card from "./card"; 

const List = Styled.ul`
    display:flex; 
    list-style-type: none; 
    margin: 1rem auto; 
    padding: 16px; 
`; 

const CardItem= Styled.li`
    padding: 16px; 
`


class CardList extends Component {
    state = {
        users: []
    }; 

    async componentDidMount() {
        const response = await loadData(`https://randomuser.me/api/?results=4`); 
        const users = response.results; 
        this.setState({
            users
        }); 
    }

    render() {
        const { users } = this.state; 
        return (
            <List>
               {users.map(user => (
                   <CardItem key={user.login.uuid}>
                       <Card user={user} /> 
                   </CardItem>
               ))}
            </List>
        );
    }
}

export default CardList; 

