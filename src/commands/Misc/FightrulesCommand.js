const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class FightrulesCommand extends BaseCommand {
  constructor() {
    super('fightrules', 'misc', []);
  }

  run(client, message, args) {
    message.channel.send('**Fighting Rules** \n  **Rule 1** \n **FIGHT CHILLS OR ADMIN = TEMPBAN**\n **Rule 2** \n Dont do fight deals unless you first view this command and then contact a mod or admin for the to be a witness  \n **Rule 3** \n admins are not responisble if u loose a fight pls dont be a big baby about that \n **Rule 4** \n Dont be toxic dude if u lost u lost calm down . \n now that you have read these rules call a mod or admin and **👏GET👏IN👏THE👏RING👏** ');
  }
}