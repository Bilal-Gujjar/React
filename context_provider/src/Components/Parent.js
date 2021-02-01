import React,{useContext } from 'react'
import ValueChanger from './CenterContext'

function Parent() {
    let showOFF = useContext(ValueChanger)
    return (
        <div>
            <h1><b><i>Hello form the  Parent Component    {showOFF}</i></b></h1>
        </div>
    )
}

export default Parent
