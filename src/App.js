import './App.css';
import React from 'react';
import MainView from './components/MainView';

 
function Header() {
  return (
    <header className="App-header">
    <h1>English Cards</h1>
  </header>
  )
}

function Footer() {
  return (
    <footer className="App-header">
    <h5><a href="https://dinaspencer.net" target="_blank" rel="noreferrer">Created by Dina Spencer</a></h5>
  </footer>
  )
}

function App() {


  return (
    <div className="App">
      <Header />
      <MainView />
      <Footer />
      
    </div>
  );
}

export default App;
