import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Message} from './Message.js';
function App() {
  let [count, setcount] = useState(1)
  return (
    <div>
      <Message counter={count} />
      <br />
      <button onClick={()=>setcount(++count)}>Update Counter</button>
    </div>
  );
}
export default App;
