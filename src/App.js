import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [result, setResult] = useState(0)
  const inputs = useRef(null);

  const clearInput = () => inputs.current.value = 0;

  const clearResult = () => setResult(0);

  const handleAdd = e => {
    e.preventDefault();
    setResult(result + Number(inputs.current.value))
  }

  const handleSubtract = e => {
    e.preventDefault();
    setResult(result - Number(inputs.current.value));
  }

  const handleMultiply = e => {
    e.preventDefault();
    setResult(result * Number(inputs.current.value));
  }

  const handleDivide = e => {
    e.preventDefault();
    setResult(result / Number(inputs.current.value));
  }

  return (
    <div className="App container mt-2">
      <h1>Simple react calculator</h1>
      <code className='h3'>Result: {result}</code>
      <div class="input-group mb-3">
        <input defaultValue="0" ref={inputs} pattern="[0-9]" type="number" class="form-control" placeholder="Type a number" aria-label="Type a number" aria-describedby="button-addon2" />
        <button onClick={clearInput} class="btn btn-outline-secondary" type="button" id="button-addon2">Reset ⟳</button>
      </div>
      <button onClick={handleAdd} className="btn btn-secondary mx-1">Add</button>
      <button onClick={handleSubtract} className="btn btn-secondary mx-1">Subtract</button>
      <button onClick={handleMultiply} className="btn btn-secondary mx-1">Multiply</button>
      <button onClick={handleDivide} className="btn btn-secondary mx-1">Divide</button>
      <button onClick={clearResult} className="btn btn-danger mx-1">Clear Result</button>
    </div>
  );
}

export default App;
