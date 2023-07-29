import React, { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';

// create context object
const BotContext = createContext()

export const useBotContext = () => {
    const context = useContext(BotContext);
    if (!context) {
        throw new Error('useBotContext must be used within a BotProvider');
    }
    return context;
};

// create context provider
export default function BotProvider({ children }) {

}

export { BotContext };