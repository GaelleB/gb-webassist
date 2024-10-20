import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Tarifs from './components/Tarifs';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Services/>
      <Tarifs/>
      <Contact/>
    </div>
  );
}

export default App;