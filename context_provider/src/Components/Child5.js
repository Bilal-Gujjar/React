import React,{useState} from 'react'

function Child5() {
    const [counter, setCounter] = useState(2)
    return (
        <div>
            <h5>Hello form the  Child5 Component{counter}</h5>
            <button onClick={setCounter(counter)}>StateButton</button>
        </div>
    )
}

export default Child5
