import './App.css';
import { useState } from 'react';

function App() {
  const[data,setData]=useState(0);

  const inc=()=>{
    setData(data+1);
  }

  const dec=()=>{
    setData(data-1);
  }
  return (
    <div className="App">
      <span>{data}</span>
      <button onClick={inc}>Increse</button>
      <button onClick={dec}>Decrese</button>
    </div>
  );
}

export default App;
