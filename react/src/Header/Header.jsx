
import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export const header = () => {
    return (
        <div className='head'>
            <h1>REACT TASK</h1>
            <Navigation />
        </div>
    )
}

export default header;
