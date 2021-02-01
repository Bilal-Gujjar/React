import {useState} from 'react'
import Child1 from './components/child1'
import Reducer from './components/reducer'
function App() {

  
  const [inner, setInner] = useState(10)
  return (
    <div >
      <h1>Hello For the APP.JS</h1>
      <hr/>
      <Child1 succc={inner}/>
      <button onClick={()=>setInner(inner+2)}>Click ME</button>
      <hr/>
       <Reducer/>


    </div>
  );
}

export default App;
