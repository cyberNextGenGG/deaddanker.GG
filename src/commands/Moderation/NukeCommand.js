const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderation', []);
  }
  //>nuke
  async run(client, message, args) {
    //>nuke
    //Perm check
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Calm down jamal dont whip out the **NUKE** . \n all jokes aside u r missing the `MANAGE_MESSAGES` permission')
    if (!message.guild.me.hasPermission('MANAGE_CHANNELES'))return message.channel.send('Bruh before u earase the evidencd i need the `MANAGE_CHANNELS` perm for this')
    //Var
    let reason = args.join(" ");
    const NukeTown = message.channel;
    //Input Stufff
    if (!reason) reason = "No reason given"
    if (!NukeTown.deletable)return message.channel.send('This channel hsa some un-machted air proction. Our nukes cant penetrate it!🪖 ')
    //.EXE
    await NukeTown.clone().catch(err => console.log(err));
    await NukeTown.delete(reason).catch(err => console.log(err));
    message.NukeTown.send('BOOM!!!!!! THIS CHANNEL WAS NUKED !!! \n https://tenor.com/view/pepe-nuke-apocalypse-meme-gif-9579985')
  }
}
