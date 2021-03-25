import React from 'react'
import Aside from "../Aside/Aside"
import Component from '../Component/Component'
import "./Main.css"

export default function Main() {
    return (
        <div className="main">
            <h2>REACT PROJECT</h2>
            <div className="block">
            <Aside />
            <Component />
            </div>
        </div>
    )
}

