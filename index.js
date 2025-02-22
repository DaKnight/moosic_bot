require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');
// const { token } = require('./config.json');
require('dotenv');

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
