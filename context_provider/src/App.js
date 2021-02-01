import React from 'react'
import './App.css';
import ValueChanger from './Components/CenterContext';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';
import Child3 from './Components/Child3';
import Child4 from './Components/Child4';
import Child5 from './Components/Child5'
import Parent from './Components/Parent';

function App() {
  //const showValue = useContext(ValueChanger)
  return (
    <div className="App">
      <h1>Hello world from the APP.JS</h1>
      <hr />
      <Parent />
      <p>_____________------/\Parent/\--------_____________</p>
      <Child1 />



              <ValueChanger.Provider value={2365} >
                <div>
                <Child2 />             
                <Child3 />
                <Child4 />
                </div>
              </ValueChanger.Provider>



      <Child5 />

    </div>
  );
}

export default App;
