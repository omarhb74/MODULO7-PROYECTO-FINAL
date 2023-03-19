import React from 'react';
import Calculadora from './Calculadora';
import './App.css';
import About from './about';

function App() {
  return (
    <div className="app">
      <About/>
      
      <Calculadora />
    </div>
  );
}

export default App;
