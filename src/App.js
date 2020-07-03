import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Message} from './Message.js';
function App() {
  let [count, setcount] = useState(1)
  let [isDay, setDay] = useState(false)
  return (
    <div className={`box ${isDay ? 'dayLight' : ''}`}>
      <h1> Hello Ali Good {isDay ? 'Morning' : 'Night'} </h1>
      <Message counter={count} />
      <br />
      <button onClick={()=>setcount(++count)}>Update Counter</button>
      <button onClick={()=>{setDay(!isDay) }}>Update Day</button>
    </div>
  );
}
export default App;
