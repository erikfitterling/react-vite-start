import React from 'react';
import './App.css';
import { createCounter } from './api/counterService';

function App() {
  const [name, setName] = React.useState('');
  const [experience, setExperience] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && experience) {
      await createCounter({ name, experience });
      setName('');
      setExperience('');
    }
  };

  return (
    <div>
      <h1>Valhalla Counter</h1>
      <div className='input-container'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select 
            value={experience} 
            onChange={(e) => setExperience(e.target.value)}
            aria-label="Rate your experience"
          >
            <option value="" disabled>How was your experience?</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
          </select>
          <button type="submit">Enter Valhalla</button>
        </form>
      </div>
    </div>
  )
}

export default App;