const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class RulesCommand extends BaseCommand {
  constructor() {
    super('rules', 'misc', []);
  }

  async run(client, message, args) {
    message.channel.send('The Dead Dankers Rules (**MUST FOLLOW**)');
    message.channel.send('**Rule 1** \n Rasicm , sexism or Homophobia is NOT tolerated here\n **Rule 2** \n Begging of any kind is not accepeted hereif you need money do pls bj max. \n **Rule 3 **\n Advertising is not accepted here in normal channels . We have specifc channels for that .NO DISCORD OR DISBAORD.COM LINKS \n **Rule 4 **\n We are a generally english server but we do have a non-english channel. \n **BY BEING A MEMBER OF THIS SERVER YOU AGREE TO THESE RULES**')
    message.channel.send('**Discord TOS** : discord.com/terms')
  
    message.react('✔️')
    }
}
