import React from 'react';
import './App.css';
import MainSection from './components/mainsection/MainSection';
import Navbar from './components/navbar/Navbar';

/*ItemListContainer se encuentra dentro de MainSection.jsx por razones de organización y prolijidad*/

const App=()=> {
  return (
  <> 
  <Navbar/>
  <MainSection/>
  </>
  );
}

export default App;