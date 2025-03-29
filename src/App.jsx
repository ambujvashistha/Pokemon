import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState(0);
  console.log(state);

  function add() {
    setState(state+1)
  }

  function sub() {
    setState(state-1)
  }

  function mult() {
    setState(state * 2)
  }

  function reset() {
    setState(0);
  }

  const div_style = {
    border: '2px white solid',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0',
    margin: '0 2px 0 2px',
    padding: '3px'
  };

  const img_style = {
    border: '2px black solid',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0',
    margin: '0 2px 0 2px',
    padding: '3px',
    height: '150px'
  };

  const x = [];
  for (let i = 1; i <= state; i++) {
    x.push(i);
  }

  function pok(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  return (
    <div>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
      <button onClick={mult}>Multiply by two</button>
      <button onClick={reset}>Reset</button>
      <br /><br /><br /><br />
      <div style={div_style}>
        {x.map(a => (
          <img key={a} style={img_style} src={pok(a)} alt={`Pokemon ${a}`} />
        ))}
      </div>
    </div>
  );
}

export default App;

