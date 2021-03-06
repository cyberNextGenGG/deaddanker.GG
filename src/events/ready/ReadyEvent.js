const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' is online . have fun lol.');
    client.user.setPresence({
      activity: {
        name: `>help `,
        type: "PLAYING"
      },
      status: 'online'
    })
  }

  

}