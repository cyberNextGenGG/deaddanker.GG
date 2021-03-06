const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class TestEmbed extends BaseCommand {
  constructor() {
    super('help', 'help', []);
  }
  
  async run(client, message, args) {
     const TestEmbed = new Discord.MessageEmbed()
     .setTitle('DΞΛD DΛNKΞR COMMΛND LIST')
     .setDescription('FUN 🥳 `>say` | say something asif you were the bot \n `>sayem` | Say something as an embed (Good for announcents) \n `>choose` | coming soon  . . . \n `>8b `| coming soon. . . \n `>dicerol`l | coming soon . . .\n `>meme `| shows you the freshest memes in town \n MODERATION  \n `nuke` | nuke a channel . \n `>purge {num}` | detsory the evide- i mean messages\n 🔨 \n MISC 🌤')
     .setColor('#e3b7d2');
  await message.channel.send(TestEmbed)
  }
}