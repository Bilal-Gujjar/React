import React,{useReducer} from 'react'

import checkcase from './Reducer'



function Child4() {
    const [state, dispatch] = useReducer(checkcase, 30)
    return (
        <div>
            <h4>Hello form the  Child4 Component --{state}</h4>
            <button onClick={()=>dispatch("CK")}>Hit ME!!</button>
        </div>
    )
}

export default Child4
