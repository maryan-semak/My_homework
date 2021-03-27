import React from 'react'

 const List = (props) => {
    return (   
            <ul>
                {props.data.map((item) => (
                <li key={item}>{item.name}</li>
                 ))}
            </ul>    
    );
}


export default List;
          