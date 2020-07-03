import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

export default function App() {
  let [Count, setCount] = useState(1)
  return (
    <div>
      <h3>Value of counter vairable is {Count} </h3>
      <br />
      <button onClick={()=>{alert("Button Clicked")}}>Update Counter</button>
    </div>
  );
}

export default App;
