const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
}];
  
client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
 });
 
 // THIS MUST BE THIS WAY
 client.login(process.env.NDg1NDIwODEyNTI3MDc1MzI4.DmwTiA.Bu1efaWE0ddN8srgIKBvgOg-wKw);
