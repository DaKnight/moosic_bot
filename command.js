require('dotenv').config();
const { REST, Routes } = require ('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'play',
    description: 'Play the song!',
  },
  {
    name: 'pause',
    description: 'Pause the current song!',
  },
  {
    name: 'skip',
    description: 'Skip the current song!',
  },
  {
    name: 'nexttrack',
    description: 'Play the next song!',
  },
  {
    name: 'previoustrack',
    description: 'Play the previous song!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
(async () => {
    try {
      console.log('Started refreshing application (/) commands.');
    
      await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
})();
