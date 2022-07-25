// Libraries
import React from 'react';

// Components
import MainImage from './Components/MainImage';
import MainDescription from './Components/MainDescription';

// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheets/App.css'

function App() {
  return (
    <div className="App">
      <MainImage />
      <MainDescription />
    </div>
  );
}

export default App;
