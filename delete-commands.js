require('dotenv').config();
const {REST, Routes} = require('discord.js');

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async ()=> {
    try {
        console.log('🔄 Refreshing all the slash commands...');

        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {body: []});

        console.log('Successfully removed all commands!');
    }
    catch(error){
        console.error('Error removing commands: ', error);
    }
})();