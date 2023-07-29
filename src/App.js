import './App.css';
import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import BotProvider from './components/BotContext';
import BotArmy from './components/BotArmy';
import { BotContext } from './components/BotContext';
import './componentStyles/styles.css';

function App() {

  return (
    <BotProvider>
      <h1>Welcome to Bot-ensemble</h1>
      <div className="container">
        <div className="section1">
          <h2>Your Bot Army</h2>
          <BotArmy />
        </div>

        <div className="section2">
          <h2>Bot Collection</h2>
          <BotCollection />
        </div>
      </div>
    </BotProvider>
  )
}

export default App;