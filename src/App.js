import logo from './logo.svg';
import './App.css';
import Device from './Component/Device/Device';
import { useEffect, useState } from 'react';

function App() {
  const [steps, setSteps] = useState(0);
  const handleIncreaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  }
  useEffect( () =>{
    
  }, [steps])
  return (
    <div className="App">
      <h3>My Steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
        <Device name="phone" price="13400"></Device>
    </div>
  );
}

export default App;
