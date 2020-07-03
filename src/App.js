import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let [Count, setCount] = useState(0)
  return (
    <div>
      <h3>Value of counter vairable is {Count} </h3>
      <br />
      <button onClick={()=>setCount(++Count)}>Update Counter</button>
    </div>
  );
}
export default App;
