const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', msg => {
    if(msg.content === '$help')
    msg.reply('Check Your DM :white_check_mark:')
  });

client.login(process.env.TOKEN);
