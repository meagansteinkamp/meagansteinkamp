import React from 'react';
import NavBar from './components/common/NavBar';
import NavMenu from './components/common/NavMenu';
import NavMenuContextProvider from './contexts/NavMenuContext';
import Home from './components/pages/Home';
import './styles/css/main.css';

function App() {
  return (
    <div className="App">
      <NavMenuContextProvider>
        <NavBar />
        <NavMenu />
      </NavMenuContextProvider>
      <Home />
    </div>
  );
}

export default App;
