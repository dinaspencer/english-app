import './App.css';
import React from 'react';
import MainView from './components/MainView';

 
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
      {/* <Taboo />
      <PhrasalVerbs />
      <Prefixes /> */}
    </div>
  );
}

export default App;
