import React from 'react' ; 
import './Navigation.css';
import List from '../List/List.jsx'

export const Navigation = () => {
    return (
        <div className="nav">
               <List data={[{name:'Home'},{name:'Works'},{name:"Contact"},{name:'About'}]}/>
        </div>
    )
}


export default Navigation;
