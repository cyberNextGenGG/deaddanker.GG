const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')


module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'Fun', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You are missing the `ADMINISTRATOR` permission")
    const mentionedMember = message.mentions.members.first();
    const messageToSay = args.join(" ");
    message.channel.send(`${messageToSay}`)
    message.delete();
    try {
    } catch (err) {
      console.log(err);
      message.channel.send('I am not able to send that message.')
    }
  }
}