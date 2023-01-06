import React from 'react'
import "./Components/navBar/NavBar.css"
import NavBar from './Components/navBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner.js';
import RowPost from './Components/RowPost/RowPost';
import {orginals,action} from './url'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title="Netflix Orginals" />
      <RowPost url={action} title= " Actions" isSmall />
    </div>
  );
}

export default App;
