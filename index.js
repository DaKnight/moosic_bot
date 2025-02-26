require('dotenv').config();

const fs = require("node:fs");
const path = require("node:path");
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', message => {
	if(message.author.bot) return;
	message.reply({
		content: 'Hi from Deepak bot!',
	});
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.TOKEN);
