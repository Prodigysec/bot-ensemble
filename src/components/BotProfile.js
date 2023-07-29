import React, { useState } from 'react';
import { useBotContext } from './BotContext';
import '../componentStyles/styles.css';

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

    function handleDelete() {
        deleteBot(bot.id);
    };

    return (
        <div className="bot-profile">
            <img
                className="avatar"
                src={bot.avatar_url}
                alt={bot.name}
                onClick={handleClick}
            />
            <div className='bot-details'>
                <h3>{bot.name}</h3>
                <span>{bot.bot_class}</span>
            </div>
            <small>Health:{bot.health}</small>
            <small>Damage:{bot.health}</small>
            <small>Armor:{bot.health}</small>

            {isInBotArmy && (
                <button className="delete-button" onClick={handleDelete}>
                    x
                </button>
            )}
        </div>
    );
};

export default BotProfile;