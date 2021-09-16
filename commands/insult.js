const grabInsult = require("../botFunctions/insult");

module.exports = {
  name: "insult",
  description: "Sends insults",
  async execute(msg, args) {
    const reply = await grabInsult();
    if(args.length===0)msg.reply(reply.toString());
    else
    msg.channel.send(reply.toString() + args[0]);
  },
};
