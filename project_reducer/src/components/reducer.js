import {useReducer} from 'react'
import Shipper from './store'

var Reducer = () =>{
    let [state, dispatch] = useReducer(Shipper, 30000)
    return(
        <div>
            <h1>Welcome from the Shipper Page <br/>Count : {state}</h1>
            <button onClick={()=>dispatch("MIS")}>Add me</button>
        </div>
    )
}

export default Reducer





























// import  {useReducer} from 'react'
// import Selector1Reducer from './store'


//    const Uppercast = () => {
//        let [state, dispatch] = useReducer(Selector1Reducer, 300);
//        return(
//         <div>
//                <h1>Hello form the the Reducer Child page
//                <br/>Click and Update value by use the reducer Actions 
//                <br/>Count : {state}
//            </h1>
//            <button onClick={()=>dispatch("ADDUP")}>Click the for Action</button>
//         </div>
//        )

    
// }

// export default Uppercast


