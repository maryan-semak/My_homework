import React, { Component } from 'react'

const UserList = (props) => {
    return (   
            <ul>
                {props.user.map((item) => (
                <li key={item}>User: Name: {item.name } Lastname:  {item.lastName} <br/> Age: {item.age} </li>
                 ))}
            </ul>    
    );
}

export default UserList;

