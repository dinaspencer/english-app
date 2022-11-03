import './App.css';
import React, {  useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainView from './components/MainView';
import Prefixes from './components/Prefixes';
import PhrasalVerbs from './components/PhrasalVerbs';
import Taboo from './components/Taboo';
 
function Header() {
  return (
    <header className="App-header">
    <h1>English Games</h1>
  </header>
  )
}



function App() {


  return (
    <div className="App">
      <Header />
      <MainView />
      <Taboo />
      <PhrasalVerbs />
      <Prefixes />
    </div>
  );
}

export default App;
