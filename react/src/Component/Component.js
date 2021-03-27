import React from 'react'
import UserList from '../UserList/UserList'

export default function Component() {
    return (
        <div>
            <h2>Component-Based</h2>
            <p>
Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.  </p>
<UserList user={[{name:'Bill', lastName:'Geits', age:'56'},
{name:'Ilon', lastName:'Mask', age:'43'}, {name:'Alex', lastName:'Hot', age:'26'}]}/>
        </div>
    )
}

