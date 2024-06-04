/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterComponent count={count} setCount={setCount} />
    </>
  );
}

function CounterComponent(props) {
  return (
    <>
      <button onClick={()=> {
        props.setCount(props.count + 1);
      }}>
        Counter is {props.count}
      </button>
    </>
  );
}

export default App;
