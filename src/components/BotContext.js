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
    const [botData, setBotData] = useState([]);
    const [enlistedBots, setEnlistedBots] = useState([]);

    const enlistBot = (bot) => {
        if (!enlistedBots.find((enlistedBot) => enlistedBot.id === bot.id)) {
            setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
        }
    };

    useEffect(() => {
        fetch("http://localhost:3003/bots")
            .then((res) => res.json())
            .then((data) => setBotData(data))
    }, [])

    return (
        <BotContext.Provider value={values}>
            {children}
        </BotContext.Provider>
    )
}

export { BotContext };