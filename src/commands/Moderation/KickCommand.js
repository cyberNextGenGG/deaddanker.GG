const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

 async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Eyo Bro Caught U slacking! . U dont have the `KICK_MEMBERS` permission . dissapointed in u")
  const mentionMemeber = message.mentions.members.first();
    let reason = args.slice(1).join(" ")
    if (!reason)reason = ("Reason Not Stated")
    const KickEmbed = new Discord.MessageEmbed()
     .setTitle('You were sadly kicked from **DEAD DANKERS**')
     .setDescription('Reason : ${reason}')
     .setColor("#00000")
     .setTimestamp()
     .setFooter(client.user.tag,client.user.displayAvatarURL())

  // >kick @user DM ads
  if (!args[0]) return message.channel.send("Try Running this command again but this time actually memtion someone to kick \n 🤦")
  if (!mentionMemeber) return message.chanel.send("That user doesnt exist smh")
  try {
    await mentionMemeber.send(KickEmbed)
  }catch (err){
    console.log('I cant DM that member for some reason.')
  }
  try{
   await mentionMemeber.kick(reason)
  } catch(err){
    console.log(err);
   return message.channel.send("Cant kick that guy for some reason weird.")
  }
}
}