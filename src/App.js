import './App.css';
import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import BotProvider from './components/BotContext';
import BotArmy from './components/BotArmy'
import { BotContext } from './components/BotContext'

function App() {

  return (
    <BotProvider>
      <div>
        <h1>Welcome to Bot-ensemble</h1>

        <h2>Your Bot Army</h2>
        <BotArmy />

        <h2>Bot Collection</h2>
        <BotCollection />
      </div>
    </BotProvider>
  )
}

export default App;