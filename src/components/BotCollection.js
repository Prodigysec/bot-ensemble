import React from 'react';
import { useContext, useState, useEffect } from "react";
import BotProfile from './BotProfile';
import { useBotContext } from './BotContext';

function BotCollection() {
    const { botData, enlistedBots } = useBotContext();

    return (
        <div className='Bot-collection'>{
            botData.map((bot) => (
                <BotProfile
                    key={bot.id}
                    bot={bot}
                    enlisted={enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)}
                />
            ))}
        </div>
    )
};

export default BotCollection;