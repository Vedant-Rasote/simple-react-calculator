import React, { useRef, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const inputs = useRef(null);
  const initialState = { result: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add": return { result: state.result + Number(inputs.current.value) };
      case "subtract": return { result: state.result - Number(inputs.current.value) };
      case "multiply": return { result: state.result * Number(inputs.current.value) };
      case "divide": return { result: state.result / Number(inputs.current.value) };
      case "clearInput":
        inputs.current.value = 0;
        return { result: state.result }
      case "clearResult": return { result: 0 }
      default: return new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="text-center container mt-2">
      <h1>Simple react calculator</h1>
      <code className='h3'>Result: {state.result}</code>
      <div className="input-group mb-3">
        <input defaultValue="0" ref={inputs} pattern="[0-9]" type="number" className="form-control" placeholder="Type a number" aria-label="Type a number" aria-describedby="button-addon2" />
        <button onClick={() => dispatch({ type: "clearInput" })} className="btn btn-outline-secondary" type="button" id="button-addon2">Reset ⟳</button>
      </div>
      <button onClick={() => dispatch({ type: "add" })} className="btn btn-secondary mx-1">Add</button>
      <button onClick={() => dispatch({ type: "subtract" })} className="btn btn-secondary mx-1">Subtract</button>
      <button onClick={() => dispatch({ type: "multiply" })} className="btn btn-secondary mx-1">Multiply</button>
      <button onClick={() => dispatch({ type: "divide" })} className="btn btn-secondary mx-1">Divide</button>
      <button onClick={() => dispatch({ type: "clearResult" })} className="btn btn-danger mx-1">Clear Result</button>
    </div>
  );
}

export default App;
