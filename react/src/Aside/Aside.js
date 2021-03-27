import React from 'react'
import Time from '../Time/Time'
import User from '../User/User'
export default function Aside() {
    return (
        <div>
            <Time />
            <User name='Ira' firstName='But' age='44'/>
            <h2>Declarative </h2>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug. </p>
        </div>
    )
}

