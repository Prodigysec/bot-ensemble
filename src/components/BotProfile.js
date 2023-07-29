import React, { useState } from 'react';
import { useBotContext } from './BotContext';

function BotProfile({ bot, enlisted, isInBotArmy }) {
    const { enlistBot, unenlistBot, deleteBot } = useBotContext();

    function handleClick() {
        if (isInBotArmy) {
            unenlistBot(bot.id);
        } else {
            if (!enlisted) {
                enlistBot(bot);
            } else {
                unenlistBot(bot.id);
            }
        }
    }

    return (
        <div className="bot-profile">
            <img
                className="avatar"
                src={bot.avatar_url}
                alt={bot.name}
                onClick={handleClick}
            />d
            <h3>{bot.name}</h3>
            <span>{bot.bot_class}</span>
            <p>{bot.catchphrase}</p>

            {isInBotArmy && (
                <button className="delete-button" onClick={handleDelete}>
                    x
                </button>
            )}
        </div>
    );
};

export default BotProfile;