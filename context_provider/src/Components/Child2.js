import ValueContext from './CenterContext'
import React,{useContext}  from 'react'

function Child2() {
     const display = useContext(ValueContext)
    return (
        <div>
            <h2>Hello form the  Child2 Component{display}</h2>
        </div>
    )
}

export default Child2
