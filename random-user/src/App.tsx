import React from 'react';
import './App.css';
import Header from './components/Header';
import { RandomUser } from './components/RandomUser';

function App() {
  return (
    <div className="App">
     <Header/>
     <RandomUser/>
    </div>
  );
}

export default App;
