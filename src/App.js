import React from 'react';

// styling
import './App.css';

// components
import Menu from './menu/Menu';

const App = () => {
  return (
    <div className="App cfb">
      <Menu/>

      <div className="container cfb">
        <div className="square">Projects</div>
        <div className="square">Projects</div>
        <div className="square">Projects</div>
        <div className="square">Projects</div>


      </div>
  
    </div>
  );
}

export default App;
