const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))return message.channel.send("My guy are u trynna cover up some evidence . . .  uhm u cant u need the MANAGE_MESSAGES permission ; hmm creepy")
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))return message.channel.send("How u trying to use this command without even giving me the MANAGE_MESSAGES permission.")
    if (!args[0]) return message.channel.send("Try re-running this command but actually state a number of messages that u wanna purge \n >purge 69")
  const  amountToDelete = Number(args[0],10)

  if(isNaN(amountToDelete))return message.channel('Whatever u just typed was not a number try re-running the command')
  if(!Number.isInteger(amountToDelete)) return message.channel.send('Ok ik that bots are pretty smart but i havent learned decimals yet so pls go easy on me')
  if(!amountToDelete || amountToDelete<2 ||amountToDelete > 100) return message.channel.send("This is a purge command . If u wanna try and delete more then 100 messages(ur mad sus) and use the nuke command");
    await message.channel.bulkDelete(amountToDelete)
      .then(message.channel.send('Deleted the messages.'))
    cons.log(err);
    message.channel.send("Hmm that was strange i couldnt delete that ||(tip : check if the messages are over 2 weeks old)||")
}
}