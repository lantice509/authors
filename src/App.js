import React, { useContext } from 'react';

import './App.css';
import FormAuteur1 from './components/FormAuteur1';
import FormAuteur2 from './components/FormAuteur2';
import Hobies from './components/Hobies';

const App = () => {
  return (
    <div className="App">
      <Hobies />
      <FormAuteur1 />
      <FormAuteur2 />
    </div>
  );
}

export default App;