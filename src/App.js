// Libraries
import React from 'react';

// Components
import MainImage from './Components/MainImage';
import MainDescription from './Components/MainDescription';
import CreationsSection from './Components/CreationsSection';
import Footer from './Components/Footer';

// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheets/App.css'

function App() {
  return (
    <div className="App">
      <MainImage />
      <MainDescription />
      <CreationsSection />
      <Footer />
    </div>
  );
}

export default App;
