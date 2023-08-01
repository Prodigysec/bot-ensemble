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

    const unenlistBot = (botId) => {
        setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((bot) => bot.id !== botId));
    };

    const deleteBot = (botId) => {
        fetch(`https://botdata.onrender.com/bots/${botId}`, {
            method: 'DELETE'
        });
        setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((bot) => bot.id !== botId));
    };

    const values = {
        botData,
        enlistedBots,
        enlistBot,
        unenlistBot,
        deleteBot,
    };

    useEffect(() => {
        fetch("https://botdata.onrender.com/bots")
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
