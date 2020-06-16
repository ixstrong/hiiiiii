const Discord = require('discord.js');
const client = new Discord.Client();



client.on("ready", () => {
  const channel = client.channels.get("705062650073317407");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    console.log("Successfully connected.");
  }).catch(e => {
    console.error(e);
  });
});



client.login(process.env.TOKEN);
