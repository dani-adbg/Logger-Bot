const { Client, Collection } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: 131071 });

// EVENTS
const { loadEvents } = require('./Handlers/eventHandler');

client.events = new Collection();

loadEvents(client);

// LOGIN
client.login(process.env.TOKEN);