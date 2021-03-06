const { DiscordAPIError } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DevEmbed extends BaseCommand {
  constructor() {
    super('dev', 'fun', []);
  }

  async run(client, message, args) {
    
   const DevEmbed = new Discord.MessageEmbed
     .setTitle('About the Devs')
     .setDescription('Hello My name is Chills (AKA YegsiMalone)and i am owner and founder of the DΞΛD DΛNKΞR bot and server. Pls do make sure to join my support and other stuff server DΞΛD DΛNKΞRS https://discord.gg/7scek3gpDY. ')
     .setColor('#6C9C99');
  
   const DevEmbed2 = new Discord.MessageEmbed
      .setTitle('About The dev')
      .setDescription('')
      .setColor('')
      
 }
}