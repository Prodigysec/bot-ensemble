import React from 'react';
import BotProfile from './BotProfile';
import { useBotContext } from './BotContext';

function BotArmy() {
    const { enlistedBots } = useBotContext();

    return (
        <div>
            {enlistedBots.map((bot) => (
                <BotProfile
                    key={bot.id}
                    bot={bot}
                    enlisted={true} 
                    isInBotArmy={true}
                />
            ))}
        </div>
    );
}

export default BotArmy;
