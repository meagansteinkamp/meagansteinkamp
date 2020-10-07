import React from 'react';
import NavBar from './components/common/NavBar';
import Home from './components/pages/Home';
import './styles/css/main.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
