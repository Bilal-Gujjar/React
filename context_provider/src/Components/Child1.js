import React,{useContext} from 'react'
import ValueContext from './CenterContext'

function Child1() {
   const display1 = useContext(ValueContext)
    return (
        <div>
            <h1>Hello form the  Child1 Component{display1}</h1>
        </div>
    )
}

export default Child1
