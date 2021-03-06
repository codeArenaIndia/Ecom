import React from 'react';
import { Route } from  'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>

);

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/hats' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
